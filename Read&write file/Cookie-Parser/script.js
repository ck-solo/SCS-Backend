const express = require('express');
const app = express();
const cookiePareser = require("cookie-parser")


app.use(cookiePareser());

app.get("/",function(req,res,next){
    res.send("hey");
})
app.get("/check",function(req,res,next){
     console.log(req.cookies.name);
     res.send("Checking")
})

app.get("/banned",function(req,res,next){
    res.cookie("name","utkarsh");
    res.send("Banned")
})

app.listen(3000)