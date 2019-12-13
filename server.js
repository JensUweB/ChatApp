// Third party imports
const express = require('express');
const io = require('socket.io')(3300);
const router = express.Router();

// Constants
const app = express();

io.on('connect', socket => {
    console.log('New user');
    socket.emit('chat-message', 'Hello World!');
});

router.get('/', (req, res, next) => {
    res.render('index', {});
});
app.listen(3000);