const express=require('express')
const router=express.Router()
const Post=require('../models/post.model')

const encode=require('node-base64-image').encode
const decode=require('node-base64-image').decode


var multiparty = require('multiparty');
const fs = require("fs");
const Jimp = require("jimp");
const { Binary } = require('mongodb')
const path = require('path')


router.delete('/deletePost/:id',async(req,res)=>{
   const response=await Post.findOneAndDelete({_id : req.params.id});
   response!=null ? res.json({code:'200',message:'delete post successfull',data:null}) :
                  res.json({code:'500',message:'delete post Faild',data:null})
})

router.get('/getPost/:id',async(req,res)=>{
  const response= await Post.findOne({_id: req.params.id})
    var image = response.body.toString('base64');
  const buffer = Buffer.from(image, 'base64');


     res.json({
        date : response.date,
        time : response.time,
        title : response.title,
        body :res.send(buffer)
               
     })


})
   

router.post('/createPost',async(req,res)=>{

    var form = new multiparty.Form();
    form.parse(req, async(err, fields, files)=> {

        if(files.body==undefined){
        const post=new Post({
        userId : fields.userId[0],
        date : fields.date[0],
        time : fields.time[0],
        title : fields.title[0],
        body : fields.body[0]
    })

 const response=await post.save()
 response!=null ? res.json({code:'200',message:'create post successfull',data:null}) :
                  res.json({code:'500',message:'create post Faild',data:null})
                   
        }else{

        var img = fs.readFileSync(files.body[0].path);
        console.log(files)
        var encode_img = img.toString('base64');
        console.log(files)
         const body=  Buffer.from(encode_img,'base64')

      const post=new Post({
        userId : fields.userId[0],
        date : fields.date[0],
        time : fields.time[0],
        title : fields.title[0],
        body : body
   })
   const response=await post.save()
   response!=null ? res.json({code:'200',message:'create post successfull',data:null}) :
                  res.json({code:'500',message:'create post Faild',data:null})

        }
    });

})


router.put('/updatePost/:id',(req,res)=>{
    var form =new multiparty.Form();
    form.parse(req,async(err,fields,files)=>{
           
              if(files.body==undefined){
                const response= await Post.findOneAndUpdate({_id : req.params.id},{
                        title : fields.title[0],
                        body : fields.body[0]
                    })
                    response!=null ? res.json({code:'200',message:'update post successfull',data:null}) :
                    res.json({code:'500',message:'update post Faild',data:null}) 
              }else{
                var form = new multiparty.Form();
                var img = fs.readFileSync(files.body[0].path);
                var encode_img = img.toString('base64');
        
                const body=  Buffer.from(encode_img,'base64')



                const response= await Post.findOneAndUpdate({_id : req.params.id},{
                    title : fields.title[0],
                    body : body
                })
                response!=null ? res.json({code:'200',message:'update post successfull',data:null}) :
                res.json({code:'500',message:'update post Faild',data:null}) 
              }

    })

})
module.exports=router
