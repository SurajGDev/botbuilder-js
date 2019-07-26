/**
 * @module botframework-streaming-extensions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { Header } from '../Models/Header';
import { Duplex as Stream } from 'stream';

export class SendPacket {
    public header: Header;
    public payload: Stream;
    public sentCallback: () => Promise<void>;

    public constructor(header: Header, payload: Stream, sentCallback: () => Promise<void>) {
        this.header = header;
        this.payload = payload;
        this.sentCallback = sentCallback;
    }
}
