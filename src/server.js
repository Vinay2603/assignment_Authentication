const express = require("express")
const connect = require("./configs/db")
require("dotenv").config();

const app = express()

app.use(express.json())
const  {signup,signin} = require("./controllers/auth")
const userController = require("./controllers/user")

app.post("/signup",signup)
app.post("/signin", signin)
app.use("/users", userController)

app.listen(2233, async()=>{
    await connect()
    console.log("listing on port 2233")
})