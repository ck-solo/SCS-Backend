// Basics and intro of middleware
// const express = require('express')

// const app = express()

// app.use('/', function(req,res, next){
//    console.log("I am request")
//     next()
// })

// app.get("/about",function(req,res){
//     res.send("I am about")
// })
// app.get("/home",function(req,res){
//     res.send("I am home")
// })

// app.listen(3000)


// Express section 

const express = require('express');
const app = express();
const session = require('express-session')

app.use(session({
    secret: 'random stuff',
    resave: false,
    saveUninitialized: false
}));


app.get('/',function(req, res, next){
    res.send('hey')
})

app.get('/create',function(req, res, next){
    req.session.polo = true;
    res.send("done");
})

app.get('/check',function(req, res, next){
   console.log(req.session.polo);
})

app.listen(3000);