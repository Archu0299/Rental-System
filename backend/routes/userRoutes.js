const express = require('express')
const userRouter = express.Router();
const User= require('../models/users');
const { verify } = require('jsonwebtoken');
const {generateToken , verifyToken} = require('../middleware')

userRouter.post('/user/register',async(req,res)=>
    {
        console.log(req.body,"register");
        try{
            // const user=new User(req.body);
            const msg =await User.create(req.body);
            res.status(200).send({msg:"Registered Successfully"});
        } catch(err){
            console.log(err);
        }
    })

userRouter.post('/user/signin',async (req,res)=>
{
    const {email,password}=req.body;

    try{
        const user = await User.findOne({email});
        console.log(user,'user');
        if(user.password == password)
        {
            console.log('password matches');
            const token = generateToken(user);
            res.send(200,{token,msg:"SignIn successfully"});
        }
     }catch(err)
     {
        console.log(err);
     }
});

     userRouter.patch('/edit-profile',async(req,res)=>{
    // console.log(req);
    try{
        const token = req.header('Authorization');
        const user = verifyToken(token);
        if(user.email){
            const {profile, address, mobile,name} = req.body;
            console.log(req.body,'edit profile');
            const exitingUser = await User.findOne({email:user.email});

            const result  =await exitingUser.updateOne({profile,address, mobile,name});
        
            res.status(200).send({msg:"profile updated"})
        }


    }catch(err){
        res.status(400).send({msg:err});
    }
})

    userRouter.get('/user-profile',async(req,res)=>{
        try{
           const token = req.header('Authorization');
           const user = verifyToken(token);
           if(user.email){
            const {profile, address , mobile , name} = await User.findOne({email:user.email});
            console.log({profile,address,mobile,name});
            res.status(200).send({profile,address,mobile,name});
           } 
        }catch(err){
            res.status(400).send({msg:err});
        }
    })

module.exports = userRouter;