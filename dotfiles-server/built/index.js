"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebSocket = require("ws");
var sendAsJson_1 = require("./util/sendAsJson");
var wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', function connection(ws) {
    var socket = sendAsJson_1.default(ws);
    console.log(socket);
    socket.json({ type: 'SOCKET_CONNECTED' });
    socket.on('message', function incoming(message) {
        console.log(typeof message);
        console.log(message);
    });
});
