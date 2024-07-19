const mongoose = require('mongoose')
const userRouter = require('../routes/userRoutes')

const productSchema=new mongoose.Schema({
    ownerId:{
            type:String,
            ref:'users',
            required:true
    },
    specifications: {
          type:JSON,
         // required:true
    },
    name:{
         type:String,
         required:true
    },
    description:{
          type:String,
         required:true
    },
    price_per_day:{
         type:Number,
       //  required:true
    },
    availability:{
         type:String,
       //  required:true
    },
    category:{
        type:String,
      //  required:true
    },

    image_url: {
             type:String,
             required:true
    }
});

module.exports = mongoose.model('products',productSchema);