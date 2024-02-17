exports.init = () => {
    global.io.on('connection', () => {
        console.log("connection started");
    });

    global.io.on('shopId', (data) => {
        global.io.join(data);
        console.log('joindata', data)
    });

    global.io.on("disconnect", () => {
        console.log("connection disconnected");
    });
}

exports.sendOrderId = (name, data, shopId) => {
    //for emit to all shop with orderId
    // global.io.emit(name, data);

    //for emit of orderId to particular shopid
    console.log('Received shopId:', shopId);
    global.io.to(shopId).emit(name, data);
}
