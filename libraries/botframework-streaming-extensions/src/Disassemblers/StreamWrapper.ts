/**
 * @module botframework-streaming-extensions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { Duplex as Stream } from 'stream';

export class StreamWrapper {
    public stream: Stream;
    public streamLength?: number;

    public constructor(stream: Stream, streamLength?: number) {
        this.stream = stream;
        this.streamLength = streamLength;
    }
}
