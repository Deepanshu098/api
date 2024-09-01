const server = require('./app');
// const instance = require('./razorpayInstance')

server.listen((process.env.PORT),()=>{
    console.log(`Server started at http://localhost:${process.env.PORT}`)
})

