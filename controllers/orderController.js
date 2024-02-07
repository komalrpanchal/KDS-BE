const { sendOrderId } = require('../socket');

exports.getOrders = async (req, res, next) => {
    let orderId = req.params.id;

    sendOrderId('sendOrderId', orderId)
    res.status(200).json({
      status: "success",
      orderId,
    });
  };