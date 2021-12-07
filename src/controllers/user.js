const express = require("express")
const User = require("../models/user.js")
const router = express.Router()



//************************ users CRUD ********************** */
router.post("", async(req,res)=>{
    try{
        const user =await  User.create(req.body)
        return res.status(200).send(user)    
 
 
    }catch(e){
        return res.status(500).json({message : e.message , status : "failed" })
    }
 })
 


module.exports = router
