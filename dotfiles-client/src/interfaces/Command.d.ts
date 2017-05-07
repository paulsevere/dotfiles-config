// declare namespace common {
interface Json {
    [x: string]: string | number | boolean | Date | Json | JsonArray;
}
interface JsonArray extends Array<string | number | boolean | Date | Json | JsonArray> { }


interface Command extends Redux.Action {
    path: string, action: string, data: string | Json | JsonArray
}

interface File {
    filename: string, path?: string, items?: Json
}
// }
