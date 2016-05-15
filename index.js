const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const moment = require('moment');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/log', (req, res) => {
  req.body.timeStamp = moment();
  io.sockets.emit('news', req.body);
  res.send('Request received');
});

io.on('connection', (socket) => {
  socket.emit('news', 'Connection Established');
});

const port = process.env.PORT || 3000;
server.listen(port);