const express = require('express');

const app = express();

const server = app.listen(3001, () => {
  console.log('server running on port 3001');
});

const io = require('socket.io')(server, {
  cors: {
    origin: 'https://webchat-y4ou.onrender.com',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  socket.on('SEND_MESSAGE', (data) => {
    io.emit('MESSAGE', data);
  });
  socket.on('NEW_USER', (data) => {
    console.log(data);
    io.emit('CONNECT_USER', data);
  });
  socket.on('connect', (data) => {
    console.log(data);
  });
});
