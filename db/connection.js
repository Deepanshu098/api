const mongoose = require('mongoose');

 mongoose.connect((process.env.MONGO_DB))
    .then(()=>{
        console.log('DB Connected')
    })
    .catch((err)=>{
        console.log(err)
    })

