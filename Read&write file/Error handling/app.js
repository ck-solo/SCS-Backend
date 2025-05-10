const express = require('express')
const app = express()


app.get("/",function(req,res,next){
    try{
        res.send("hey")

    }catch(err){
        next(err)
    }
})

app.get("/hey",function(req,res){ 
    res.send("Hey is Working")
})

// error handler
app.use((err , req, res, next)=>{
    res.status(500).send(err.message);
})


app.listen(3000)