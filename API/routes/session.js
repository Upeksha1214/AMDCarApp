const express=require('express')
const router=express.Router()
const User=require('../models/account.model')
const jwt=require('jsonwebtoken')
require('dotenv').config()

let array=[]

router.post('/login',async(req,res)=>{
    const response= await User.findOne({email : req.body.email , password : req.body.password});
   if( response!=null ){
    const accessToken= jwt.sign({surname:response.surname},process.env.TOKEN_KEY,{expiresIn : '10s'})
    const refreshToken= jwt.sign({surname:response.surname},process.env.RE_TOKEN_KEY,{expiresIn : '24h'})
    array.push(refreshToken)
    res.send({accessToken,refreshToken});
   }
 })

 router.post('/token',(req,res)=>{
       const refreshToken=req.body.refreshToken;
       if(refreshToken==null){res.sendStatus(401);}
       if(array.includes(refreshToken)){res.sendStatus(403);}
       jwt.verify(refreshToken,process.env.RE_TOKEN_KEY,(err,surname)=>{
             if(err){res.sendStatus(403)}else{
              const accessToken= jwt.sign({surname:surname},process.env.TOKEN_KEY,{expiresIn : '10s'})
              res.send({accessToken});
             }
            });
 });

 router.delete('/logout',(req,res)=>{
    const refreshToken=req.body.refreshToken;
    array=array.filter(t => t !== refreshToken);
    res.sendStatus(204)
 })
 

 router.post('/createAccount',async(req,res)=>{
  try {
      
 const re= await User.findOne({ email: req.body.email});
 if(re==null){
    const user=new User({

    email : req.body.email,
    password : req.body.password
  })

    const response=await user.save();
    response != null ? res.json({code:'200',message:'Account create successfull',data:null}) : 
                       res.json({code:'500',message:'User Account Create Fail',data:null});
  }else{
  res.json({code:'500',message:'Email is AllreadyExists',data:null});
 }
} catch (error) {
  res.send('Err'+error)
}
})
module.exports=router
