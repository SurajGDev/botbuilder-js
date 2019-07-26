/**
 * @module botframework-streaming-extensions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { ContentStream } from '../ContentStream';
import { Header } from '../Models/Header';
import { ResponsePayload } from '../Models/ResponsePayload';
import { StreamManager } from '../Payloads/StreamManager';
import { ReceiveResponse } from '../ReceiveResponse';
import { Duplex as Stream } from 'stream';
import { ContentStreamAssembler } from './ContentStreamAssembler';
import { PayloadAssembler } from './PayloadAssembler';

export class ReceiveResponseAssembler extends PayloadAssembler {
    private readonly _onCompleted: Function;
    private readonly _streamManager: StreamManager;

    public constructor(header: Header, streamManager: StreamManager, onCompleted: Function) {
        super(header.Id);
        this._streamManager = streamManager;
        this._onCompleted = onCompleted;
    }

    public createPayloadStream(): Stream {
        return new Stream();
    }

    public onReceive(header: Header, stream: Stream, contentLength: number): void {
        super.onReceive(header, stream, contentLength);
        this.processResponse(stream)
            .then()
            .catch();
    }

    public responsePayloadfromJson(json: string): ResponsePayload {
        return JSON.parse(json) as ResponsePayload;
    }

    public close(): void {
        throw new Error('Method not implemented.');
    }

    private stripBOM(input: string): string {
        return (input.charCodeAt(0) === 0xFEFF) ? input.slice(1) : input;
    }

    private async processResponse(stream: Stream): Promise<void> {
        let s: Buffer = stream.read(stream.readableLength) as Buffer;
        if (!s) {
            return;
        }
        let ps = s.toString('utf8');
        let rp: ResponsePayload = this.responsePayloadfromJson(this.stripBOM(ps));
        let rr: ReceiveResponse = new ReceiveResponse();
        rr.StatusCode = rp.statusCode;

        if (rp.streams) {
            rp.streams.forEach( (s): void => {
                let a: ContentStreamAssembler = this._streamManager.getPayloadAssembler(s.id);
                a.contentType = s.contentType;
                a.contentLength = s.length;
                rr.Streams.push(new ContentStream(s.id, a));
            });
        }

        await this._onCompleted(this.id, rr);
    }
}
