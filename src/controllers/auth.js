const jwt = require("jsonwebtoken")
require("dotenv").config();
const User = require("../models/user")
const newToken = (user)=>{
    return jwt.sign({id :user.id}, JWT_SECRET_KEY  )
}

const signup = async(req,res)=>{
    try{
        const user = await User.create(req.body)
        const token = newToken(user)
        return res.status(201).json({data:{token}})
    }catch(e){
        return res.status(500).json({message :"Somthing went wrong" , status:"failed"})
    }
   
}

const signin = (req,res)=>{
    return res.send("user")
}

module.exports = {
    signup, 
    signin

}