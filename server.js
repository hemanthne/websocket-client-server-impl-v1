const WebSocket = require('ws');
const port = 8080;
const wss = new WebSocket.Server({ host: 'localhost', port: port });

wss.on('listening', function () {
    console.log(`${(new Date())} Server is listening on port ${port}`);
});
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('Hi client, I am your server');

});