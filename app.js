require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const paymentRouter = require('./routes/paymentRoutes');
require('./db/connection')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api',paymentRouter)

app.get("/api/getkey", (req, res) =>
    res.status(200).json({ key: process.env.RAZORPAY_KEY })
  );




module.exports = app;