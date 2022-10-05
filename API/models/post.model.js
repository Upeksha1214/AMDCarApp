const { ObjectId } = require('mongodb')
const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({

    userId : {
        type: ObjectId,
        required: true
    },
    date : {
        type: String,
        required: true
    },
    time : {
        type: String,
        required :  true,
    },
    title: {
        type :  String,
        required : true
    },
    body: {
        type : Object,
        required : true
    }


})
module.exports=mongoose.model('Post',postSchema)