/**
 * @module botframework-streaming-extensions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { HttpContent, HttpContentStream } from './HttpContentStream';
import { Duplex as Stream } from 'stream';

export class StreamingRequest {
    /// <summary>
    /// Request verb, null on responses
    /// </summary>
    public Verb: string;

    /// <summary>
    /// Request path; null on responses
    /// </summary>
    public Path: string;

    /// <summary>
    /// List of associated streams
    /// </summary>
    public Streams: HttpContentStream[];

    /// <summary>
    /// Creates a <see cref="StreamingRequest"/> with the passed in method, path, and body.
    /// </summary>
    /// <param name="method">The HTTP verb to use for this request.</param>
    /// <param name="route">Optional path where the resource can be found on the remote server.</param>
    /// <param name="body">Optional body to send to the remote server.</param>
    /// <returns>On success returns a <see cref="StreamingRequest"/> with appropriate status code and body.</returns>
    public static create(method: string, route?: string, body?: HttpContent): StreamingRequest {
        let request = new StreamingRequest();
        request.Verb = method;
        request.Path = route;
        if (body) {
            request.setBody(body);
        }

        return request;
    }

    /// <summary>
    /// Adds a new stream attachment to this <see cref="StreamingRequest"/>.
    /// </summary>
    /// <param name="content">The <see cref="HttpContent"/> to include in the new stream attachment.</param>
    public addStream(content: HttpContent) {
        if (!content) {
            throw new Error('Argument Undefined Exception: content undefined.');
        }
        if (!this.Streams) {
            this.Streams = [];
        }
        this.Streams.push(new HttpContentStream(content));
    }

    /// <summary>
    /// Sets the contents of the body of this streamingRequest.
    /// </summary>
    /// <param name="body">The JSON text to write to the body of the streamingRequest.</param>
    public setBody(body: any): void {
        if (typeof body === 'string') {
            let stream = new Stream();
            stream.write(body, 'utf8');
            this.addStream(new HttpContent({
                contentType: 'application/json; charset=utf-8',
                contentLength: stream.readableLength
            },
            // tslint:disable-next-line: align
            stream));
        } else {
            if (typeof body === 'object') {
                this.addStream(body);
            }
        }
    }
}
