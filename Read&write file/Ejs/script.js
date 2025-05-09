const express = require("express")
const app = express()


app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get("/", function(req, res){
    res.render("index")
})

app.get("/form", function(req, res){
    res.render("form")
})
// app.get("/forms", function(req, res){
//     // console.log(req.query())
//     res.send("Working")
// })

app.post('/form',function(req,res){
   console.log(req.body)   // this part only work when express.json and urlended line code were written  
//    and it print on console
})

app.listen(3000)