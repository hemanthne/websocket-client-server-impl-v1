'use strict';
const PORT = 8080;
const HOST = 'localhost';
const URL = `ws://${HOST}:${PORT}`;
let socket = new WebSocket(URL);

socket.onopen = function (e) {
    console.log('[open] Connection established');
    console.log('Sending message to server');
    socket.send('Hi server, I am your client');
};

socket.onmessage = function (event) {
    console.log(`[message] Data received from server: ${event.data}`);
};

socket.onclose = function (event) {
    if (event.wasClean) {
        console.log(
            `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
        );
    } else {
        // e.g. server process killed or network down
        // event.code is usually 1006 in this case
        console.log('[close] Connection died');
    }
};

socket.onerror = function (error) {
    console.log(`[error] ${error.message}`);
};