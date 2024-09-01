const express = require('express');
const { checkout, paymentVerification } = require('../controllers/paymentController');

const paymentRouter = express.Router();


paymentRouter.post('/checkout',checkout)
paymentRouter.post('/paymentverify',paymentVerification)

module.exports = paymentRouter;