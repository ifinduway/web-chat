const express = require('express');

const app = express();

const server = app.listen(3001, function() {
    console.log('server running on port 3001');
});


const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"]
  }
});

io.on('connection', function(socket) {
  socket.on('SEND_MESSAGE', function(data) {
    console.log(data)
    io.emit('MESSAGE', data)
  });
  socket.on('NEW_USER', function(data) {
    console.log(data)
    io.emit('CONNECT_USER', data)
  });
  socket.on('connect', (data) => {
    console.log(data)
  })
});
