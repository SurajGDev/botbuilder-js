/**
 * @module botframework-streaming-extensions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { HttpContentStream } from '../HttpContentStream';
import { PayloadSender } from '../PayloadTransport/PayloadSender';
import { Duplex } from 'stream';
import { PayloadTypes } from '../Models/PayloadTypes';
import { PayloadDisassembler } from './PayloadDisassembler';
import { StreamWrapper } from './StreamWrapper';
import { BasicStream } from '..';

export class HttpContentStreamDisassembler extends PayloadDisassembler {
    public readonly contentStream: HttpContentStream;
    public payloadType: PayloadTypes = PayloadTypes.stream;

    public constructor(sender: PayloadSender, contentStream: HttpContentStream) {
        super(sender, contentStream.id);

        this.contentStream = contentStream;
    }

    public async getStream(): Promise<StreamWrapper> {
        let stream: BasicStream = this.contentStream.content.getStream();

        return new StreamWrapper(stream, stream.length);
    }
}
