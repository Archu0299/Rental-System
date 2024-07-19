const express=require('express')
const app=express();
const db=require('./db.js')
const cors=require('cors')
const User=require('./models/users.js');
const Product=require('./models/Products.js')
const Rent= require('./models/rent.js')
const productRouter = require('./routes/productsRoute.js');
const userRouter= require('./routes/userRoutes.js')
const rentRouter = require('./routes/rentRoute.js');

const {verifyToken} = require('./middleware.js');

app.use(express.urlencoded(extended=true));
app.use(express.json());
app.use(cors())
app.use(userRouter)
app.use(productRouter)
app.use(rentRouter)


app.listen(8080,()=>{
    console.log("server started at 8080 successfully");
})

