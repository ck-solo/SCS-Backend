const express = require('expres');
const app = express();

app.get("/"),function(req,res,next){
    res.send("hey");
}

app.get("/banned"),function(req,res,next){
    res.cookie("banned","true");
    res.send("Banned")
}

app.listen(3000)