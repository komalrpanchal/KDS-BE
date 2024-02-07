const express = require('express'); 
const http = require('http');
const path = require('path');
const cors = require('cors');
const app = express();
const socket = require('socket.io');
const orderRouter = require("./routes/orderRoute");
const server = http.createServer(app);
const socketServer = http.createServer();
global.io = socket(socketServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

require('./socket').init()

app.use(cors());

app.use("/api/getOrderId", orderRouter);

app.use(express.static(path.resolve("./public")));

app.get('/', (req, res) => {
    return res.sendFile("./public/index.html");
})

server.listen(3000, () => {
    console.log('listening on server*: 3000');
});

socketServer.listen(3001, () => {
    console.info(`Socket server started on 3001`);
});