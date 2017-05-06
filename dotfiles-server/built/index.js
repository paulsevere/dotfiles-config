"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebSocket = require("ws");
var overwrite_1 = require("./FileActions/overwrite");
var wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log(typeof message);
        overwrite_1.overwrite(overwrite_1.processMessage(JSON.parse(message)));
    });
    ws.send('something');
});
