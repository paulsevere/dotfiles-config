import { fs } from 'mz'
import * as path from 'path'

type Path = path.ParsedPath;

export function processMessage(msg: { path: string, data: any }): { path: Path, data: Json | JsonArray } {
    return { path: path.parse(msg.path), data: msg.data }
}

export function overwrite(message: { path: Path, data: object }) {
    console.log(message.path)
}

