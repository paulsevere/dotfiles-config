import * as WebSocket from 'ws'
import { overwrite, processMessage } from './FileActions/overwrite'

interface Json {
    [x: string]: string | number | boolean | Date | Json | JsonArray;
}
interface JsonArray extends Array<string | number | boolean | Date | Json | JsonArray> { }
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws: WebSocket) {
    ws.on('message', function incoming(message) {
        console.log(typeof message);
        overwrite(processMessage(JSON.parse(message)))
    });
    ws.send('something');
});