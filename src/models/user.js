const mongoose = require("mongoose")

//*****************************  user Schema ***************** */
const userSchema = new mongoose.Schema({
   email :{type: String , required: true },
   password:{type: String , required :true , minlength:8}
  

},{
   versionKey: false,
   timestamps: true 
})

module.exports = mongoose.model("user", userSchema)

 
//*****************************  user Schema ***************** */