const express = require('express')
const rentRouter = express.Router()
const Rent = require('../models/rent');
const Product = require('../models/Products')
const { verifyToken} = require('../middleware');

rentRouter.post('/rent',async(req,res)=>
{
    console.log('rentrouter',req.body);
    const token = req.header('Authorization');
    try{
        const user = verifyToken(token);
        const expireDate = new Date(new Date().getTime() + 30*24*3600*1000);
        const {productId,pricePerDay,name} = req.body.item;
        console.log(productId,pricePerDay);

        const rentedProduct = new Rent({userId:user.email,
            productId,totalPrice:pricePerDay*30,name,
            expireDate });
            console.log(rentendProduct);

    await rentedProduct.save();
    res.status(200).send({msg:"you have rented product for one month"});

    } catch(err)
    {
        res.status(400).send({msg:err});
    }

})

rentRouter.get('/user-rent',async(req,res)=>{
    const token = req.header('Authorization');

    try{
        const user = verfiyToken(token);
        const rent = await Rent.find({userId:user.email});
        res.status(200).send(rent);
    } catch(err){
        res.status(400).send({msg:err});
    }
})

module.exports = rentRouter;