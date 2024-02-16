exports.init = () => {
    global.io.on('connection', socket => {
        console.log("connection started");
    });
}

exports.sendOrderId = (name, data, shopId) => {
    //for emit to all shop with orderId
    // global.io.emit(name, data);

    //for emit of orderId to particular shopid
    console.log('Received shopId:', shopId);
    global.io.to(shopId).emit(name, data);
}
