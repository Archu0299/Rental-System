const mongoose = require('mongoose')
const products = require('../routes/productsRoute')
const userRouter = require('../routes/userRoutes')

const rentSchema=new mongoose.Schema({
    productId:{
            type:Number,
            ref:'products',
            required:true
    },
    productItem:{
        type:String,
    },
    totalPrice: {
          type:Number,
          min:0,
    },
   userId:{
         type:String,
         ref:'users',
         required:true,
   },

    availabilityStatus:{
         type:String,
         required:true
    },
    expiryDate:{
        type:Date,
    }
});

module.exports = mongoose.model('rent',rentSchema);