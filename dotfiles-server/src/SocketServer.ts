interface Message {
    file?: string,
    directory?: string,
    action?: string
}

function handleMessage(message: any): any {

    console.log(message)
    return message
}