/**
 * @module botframework-streaming-extensions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { ContentStreamAssembler } from './Assemblers/ContentStreamAssembler';
import { Duplex as Stream } from 'stream';

export class ContentStream {
    public id: string;
    private readonly assembler: ContentStreamAssembler;
    private stream: Stream;

    constructor(id: string, assembler: ContentStreamAssembler) {
        if (assembler === undefined) {
            throw Error('Null Argument Exception');
        }
        this.id = id;
        this.assembler = assembler;
    }

    public get contentType(): string {
        return this.assembler.contentType;
    }

    public get length(): number {
        return this.assembler.contentLength;
    }

    public getStream(): Stream {
        if (this.stream === undefined) {
            this.stream = this.assembler.getPayloadStream();
        }

        return this.stream;
    }

    public cancel(): void {
        this.assembler.close();
    }

    public async readAsString(): Promise<string> {
        let obj = await this.readAll();
        // tslint:disable-next-line: no-string-literal
        let allData = obj['bufferArray'];
        let s = '';
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < allData.length; i++) {
            s += allData[i].toString('utf8');
        }

        return s;
    }

    public async readAsBuffer(): Promise<Buffer> {
    // do a read-all
        let obj = await this.readAll();
        // tslint:disable-next-line: no-string-literal
        let allData = obj['bufferArray'];
        // tslint:disable-next-line: no-string-literal
        let count = obj['size'];
        let s = Buffer.alloc(count);
        let ptr = 0;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < allData.length; i++) {
            // tslint:disable-next-line: prefer-for-of
            for (let j = 0 ; j < allData[i].length; j++) {
                s[ptr++] = allData[i][j];
            }
        }

        return s;
    }

    public async readAsJson<T>(): Promise<T> {
        let s = await this.readAsString();
        try {
            return <T>JSON.parse(s);
        } catch (error) {
            throw error;
        }
    }

    private async readAll(): Promise<Record<string, any>> {
    // do a read-all
        let allData: Buffer[] = [];
        let count = 0;
        let stream = this.getStream();

        // populate the array with any existing buffers
        while (count < stream.readableLength) {
            let chunk = stream.read(stream.readableLength);
            allData.push(chunk);
            count += (<Buffer>chunk).length;
        }

        if (count < this.length) {
            let readToEnd = new Promise<boolean>((resolve) => {
                let callback = (cs: ContentStream) => (chunk: any) => {
                    allData.push(chunk);
                    count += (<Buffer>chunk).length;
                    if (count === cs.length) {
                        resolve(true);
                    }
                };
                stream.on('data', callback(this));
            });

            await readToEnd;
        }

        return {bufferArray: allData, size: count};
    }

}
