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

const conections = [null, null];
