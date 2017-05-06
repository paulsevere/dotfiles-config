"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
function processMessage(msg) {
    return { path: path.parse(msg.path), data: msg.data };
}
exports.processMessage = processMessage;
function overwrite(message) {
    console.log(message.path);
}
exports.overwrite = overwrite;
