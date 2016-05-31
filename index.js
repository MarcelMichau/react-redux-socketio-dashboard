const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const moment = require('moment');

const bodyParser = require('body-parser');

const Tail = require('tail').Tail;
const tail = new Tail('D:\\Desktop\\Tail Test.txt');

tail.on("line", function(data) {
  io.sockets.emit('news', {
    timeStamp: moment(),
    level: 'Info',
    detail: data
  });
});

tail.on("error", function(error) {
  console.log('ERROR: ', error);
});

app.use(bodyParser.json());
app.use('/', express.static('public'));

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