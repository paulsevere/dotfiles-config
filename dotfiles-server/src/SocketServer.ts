interface Message {
    file?: string,
    directory?: string,
    action?: string
}

function handleMessage(message: Command): Command {

    console.log(message)
    return message
}