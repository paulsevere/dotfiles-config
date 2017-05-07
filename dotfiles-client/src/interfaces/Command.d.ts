// declare namespace common {
interface Json {
    [x: string]: string | number | boolean | Date | Json | JsonArray;
}
interface JsonArray extends Array<string | number | boolean | Date | Json | JsonArray> { }

interface Window { util: any }

interface Command extends Redux.Action {
    meta?: string, payload: { path: string, data: Json }
}

interface File {
    filename: string, path?: string, items?: Json
}
// }
