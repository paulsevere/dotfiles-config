import * as WebSocket from 'ws'
import { overwrite, processMessage } from './FileActions/overwrite'

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws: WebSocket) {
    console.log("connection")
    ws.on('message', function incoming(message) {
        console.log(typeof message);
        overwrite(processMessage(JSON.parse(message)))
    });
    ws.send('something');
});