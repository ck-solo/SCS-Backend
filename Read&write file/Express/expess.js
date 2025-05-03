const express = require('express')

const app = express()

app.get('/', function(req,res){
    res.send("Hello World");
})

app.get('/about', function(req,res){
    res.send("I am about");
})
 

app.listen(3000);