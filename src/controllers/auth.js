const jwt = require("jsonwebtoken")
require("dotenv").config();
const User = require("../models/user")

const newToken = (user)=>{
    return jwt.sign({id :user.id}, process.env.JWT_SECRET_KEY  )
}
console.log('newToken:', newToken())
const signup = async(req,res)=>{
      // console.log('req:', req.body)
    try{
        const user = await User.create(req.body)
        console.log('user:', user)
        const token =  "abcd"     /* newToken(user)*/
        console.log('token:', token)
        return res.status(201).json({data:{token}})
    }catch(e){
        return res.status(500).json({message :"Something went wrong" , status:"failed"})
    }
   
}

const signin = (req,res)=>{
    return res.send("user")
}

module.exports = {
    signup, 
    signin

}