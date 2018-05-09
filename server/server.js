const http = require('http');
const express = require('express');
const socketio = require('socket.io');



const app = express();
const server = http.createServer(app);
const io = socketio(server);


const PORT = process.env.PORT || 3000;

const clientPath = `${__dirname}/../client`;


app.use(express.static(clientPath));
app.get('/game',(req,res) =>{
    res.send("test");
});

io.on('connection',(sock)=>{
    console.log("Someone connected");
    sock.emit('message','Hi, you are connected');
    sock.on('message',(text)=>{
        io.emit('message', text);
    });
});
server.on('error', (err)=>{
    console.log('Server error: ',err);
});
server.listen(PORT, ()=>{
    console.log('RPS started on port ',PORT);
});