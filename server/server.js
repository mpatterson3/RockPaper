const http = require('http');
const express = require('express');
const socketio = require('socket.io');



const app = express();
const server = http.createServer(app);
const io = socketio(server);


const PORT = process.env.PORT || 3000;

const clientPath = `${__dirname}/../client`;

app.use(express.static(clientPath));
io.on('connection',(sock)=>{
    socke.emit('message','Hi are you connected');
});
server.on('error', (err)=>{
    console.log('Server error: ',err);
});
server.listen(PORT, ()=>{
    console.log('RPS started on port ',PORT);
});