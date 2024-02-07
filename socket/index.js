exports.init = () => {
    global.io.on('connection', socket => {
        console.log("connection started");
    })
}

exports.sendOrderId = (name, data) => {
    global.io.emit(name, data);
}