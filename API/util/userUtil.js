const express=require('express');
const { off } = require('../models/user.model');
const User=require('../models/user.model')


const existsUser=async()=>{
    const users=await User.find()

    for (const object of users) {
        console.log(object.surname)
    }
}
module.exports={existsUser}