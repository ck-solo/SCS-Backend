const express = require('express')

const app = express()

app.use('/', function(req,res, next){
   console.log("I am request")
    next()
})

app.get("/about",function(req,res){
    res.send("I am about")
})
app.get("/home",function(req,res){
    res.send("I am home")
})

app.listen(3000)