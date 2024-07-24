const express=require('express')
const dotenv = require('dotenv')
dotenv.config();
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


app.listen(process.env.PORT,()=>{
    console.log(`server started at ${process.env.PORT} port successfully`);
})

