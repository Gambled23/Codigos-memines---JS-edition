const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

//Server y server son distintos
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html');
})

io.on('connection', (socket) => { //Qué va a hacer cuando se haya conectado un usuario

    socket.on('chat message', (msg) => { //El evento chat message lo declaramos en el html
        io.emit('chat message', msg);
    });

    console.log('Un usuario se ha conectado')
    socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado')
    })
})



server.listen(8080, () => {
    console.log('Escuchando en el puerto 8080');
})

