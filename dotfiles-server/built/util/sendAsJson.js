"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (ws) {
    ws.json = json(ws);
    return ws;
};
function json(ws) {
    return function (message) {
        try {
            var msgJson = JSON.stringify(message);
            ws.send(msgJson);
        }
        catch (err) {
            console.error(err);
        }
    };
}
