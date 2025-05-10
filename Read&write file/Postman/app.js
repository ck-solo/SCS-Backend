const express = require('express')
const app = express()

var data = [`1,2,3,4`]

app.get('/',function(req,res){
    res.send("hello")
})

app.post('/data/user/name',function(req,res){
    res.send("ronak")
})

app.post('/data/user/id',function(req,res){
    res.send("1233")
})

app.post('/data/user/post',function(req,res){
    res.send("General Manager")
})

// app.post('/data/:number',function(req,res){
//     data.push(parseInt(req.params.number));
//     res.send(data)
// })

// app.put('',function(req,res){
//     res.send("hello put")
// })
// app.patch('/check',function(req,res){
//     res.send("hello patch")
// })
// app.delete('/check',function(req,res){
//     res.send("hello delete")
// })

app.listen(3000)