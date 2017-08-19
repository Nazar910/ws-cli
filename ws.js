const program = require('commander');
const WebSocket = require('ws');

program
    .version('0.1.0')
    .option('-h, --host [host]', 'Host of the ws-server [localhost]', 'localhost')
    .option('-p, --port [port]', 'Port of the ws-server [80]', '80')
    .option('--path [path]', 'Path on ws-server [/]', '/')
    .option('-t, --type [eventType]', 'Type of the event [eventType]', 'message')
    .option('-m, --message [message]', 'Type of the event [message]', '')
    .parse(process.argv);

const { port, path, host } = program;

const url = `ws://${host}:${port}${path}`

const ws = new WebSocket(url);

ws.on('open', async () => {
    const { type, message } = program;

    console.log('Here');
    if (message) {
        console.log('Message sent');
        ws.send(message);
    }
});