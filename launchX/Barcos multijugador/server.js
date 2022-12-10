const express = require('express');
const path = require('path');
const http = require('http');
const PORT = process.env.PORT || 3000;
const socket = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(express.static(path.join(__dirname, 'public'))); //Decirle a express que va a usar la carpeta public como static

server.listen(PORT, () => console.log(`El servidor se inicio en el puerto ${PORT}`));

const connections = [null, null];

io.on('connection', socket => {
    let playerIndex = -1;
    for (const i in connections) {
        if (connections[i] == null){
            playerIndex = i;
            break;
        }
    }

    socket.emit("player-number", playerIndex);
    console.log(`Jugador ${playerIndex} se ha conectado`)
    
    if (playerIndex === -1) return;
    connections[playerIndex] = false;

    socket.broadcast.emit("player-connection", playerIndex); //El broadcast hace que le llegue a todas las conecciones

    socket.on('disconnect', () => {
        console.log(`Jugador ${playerIndex} se ha desconectado`);
        connections[playerIndex] = null;
        socket.broadcast.emit('player-connection', playerIndex);
    });

    socket.on('player-ready', () => {
        socket.broadcast.emit('enemy-ready', playerIndex);
        connections[playerIndex] = true;
    });

    //Checar conecciones de jugadores
    socket.on('check-players',  () => {
        const players = [];
        for (const i in connections) {
            connections[i] === null ? 
                players.push({connected: false, ready: false}) : 
                players.push({connected: true, ready: connections[i]});
        }
        socket.emit('check-players', players);
    });

    socket.on('fire', id => {
        console.log(`Disparo de ${playerIndex}`, id);
        socket.broadcast.emit('fire', id);
    });
    socket.on('fire-replay', square => {
        console.log(square);
        socket.broadcast.emit('fire-replay', square);
    });

    //Desconectar a un afk
    setTimeout(() => {
        connections[playerIndex] = null;
        socket.emit('timeout');
        socket.disconnect();
    }, 600000);
});

