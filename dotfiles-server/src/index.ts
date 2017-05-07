import * as WebSocket from 'ws'
import enhance from './util/sendAsJson'

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws: WebSocket) {
    const socket = enhance(ws);
    console.log(socket);
    socket.json({ type: 'SOCKET_CONNECTED' })
    socket.on('message', function incoming(message: string) {
        console.log(typeof message);
        console.log(message)
    });
});