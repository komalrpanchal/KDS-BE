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
global.io = socket(socketServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

require('./socket').init()

app.use(cors());

app.use("/api", orderRouter);

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