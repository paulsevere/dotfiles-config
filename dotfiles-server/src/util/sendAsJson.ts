export default (ws: any) => {
    ws.json = json(ws);
    return ws
}


function json(ws: any) {
    return (message: Command) => {
        try {
            let msgJson = JSON.stringify(message);
            ws.send(msgJson);
        } catch (err) {
            console.error(err)
        }
    }
}