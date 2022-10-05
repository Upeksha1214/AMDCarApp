const mongoose=require('mongoose')

const saveDetails=new mongoose.Schema({

    title : {
        type: String,
        required: true
    },
    desc : {
        type: String,
        required: true
    },
    image: {
        type : Object,
        required : true
    }

})
module.exports=mongoose.model('Save',saveDetails)