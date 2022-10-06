const express=require('express')
const router=express.Router()

router.post('/addDetails',async(req,res)=>{
          console.log("labuna")
          res.json({code:"200" , message :"Saved Details" , data:null})
});
module.exports=router