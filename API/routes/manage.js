const express=require('express')
const router=express.Router()

router.post('/addDetails',async(req,res)=>{
          console.log("requst eka labuna")
          res.send("request eka labuna")
});
module.exports=router