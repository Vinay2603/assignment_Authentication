const mongoose = require("mongoose")

//*****************************  user Schema ***************** */
const userSchema = new mongoose.Schema({
    first_name :{type: String , required: true },
   
   


},{
   versionKey: false,
   timestamps: true 
})

module.exports = mongoose.model("user", userSchema)

//*****************************  user Schema ***************** */