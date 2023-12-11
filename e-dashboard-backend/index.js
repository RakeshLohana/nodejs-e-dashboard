const express = require("express");
const connectDB=require("./Config/dbConnection");
const dotenv=require("dotenv").config();


const app=express();


const port =process.env.PORT||5000;

connectDB();

app.post("/register",(req,res)=>{
    res.send("mndmsnd")
})




app.listen(port,()=>{
    console.log("Server running on port: "+port.toString())

})