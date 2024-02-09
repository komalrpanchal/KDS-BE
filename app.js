const express = require('express'); 
const http = require('http');
const path = require('path');
const cors = require('cors');
const app = express();
const socket = require('socket.io');
const orderRouter = require("./routes/orderRoute");
const server = http.createServer(app);
const socketServer = http.createServer();
const port = process.env.PORT || 3000;
const serverPort = process.env.Port || 3001;

app.use(cors());
global.io = socket(socketServer, {
    cors: {
      origin: `https://pos-socket-3eb5c1cd5cf2.herokuapp.com/`,
      methods: ["GET", "POST"],
        credentials: true
    }
  });

require('./socket').init()

app.use("/api/getOrderId", orderRouter);

app.use(express.static(path.resolve("./public")));

app.get('/', (req, res) => {
    return res.sendFile("./public/index.html");
})

server.listen( port, () => {
    console.log('listening on server*: 3000');
});

socketServer.listen( serverPort, () => {
    console.info(`Socket server started on 3001`);
});