/**
 * @module botframework-streaming-extensions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { Header } from '../Models/Header';
import { StreamManager } from '../Payloads/StreamManager';
import { Duplex as Stream } from 'stream';
import { PayloadAssembler } from './PayloadAssembler';

export class ContentStreamAssembler extends PayloadAssembler {
    public contentLength: number;
    public contentType: string;
    private readonly _streamManager: StreamManager;

    public constructor(streamManager: StreamManager, id: string, streamType?: string, length?: number) {
        super(id);
        this.contentType = streamType;
        this.contentLength = length;
        this._streamManager = streamManager;
    }

    public createPayloadStream(): Stream {
        return new Stream();
    }

    public onReceive(header: Header, stream: Stream, contentLength: number): void {
        super.onReceive(header, stream, contentLength);

        if (header.End) {
            stream.end(); // We don't have DoneProducing, what should happen here?
        }
    }

    public close(): void {
        this._streamManager.closeStream(this.id);
    }
}
