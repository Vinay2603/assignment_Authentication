const express = require("express")
const connect = require("./configs/db")

const userController = require("./controllers/user")
const app = express()

app.use("/user",userController)
app.use(express.json())
const  {signup,signin} = require("./controllers/auth")

app.post("/signup",signup)
app.post("/signin", signin)


app.listen(2233, async()=>{
    await connect()
    console.log("listing on port 2233")
})