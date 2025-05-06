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

// const express = require('express');
// const app = express();
// const session = require('express-session')

// app.use(session({
//     secret: 'random stuff',
//     resave: false,
//     saveUninitialized: false
// }));


// app.get('/',function(req, res, next){
//     res.send('hey')
// })

// app.get('/create',function(req, res, next){
//     req.session.polo = true;
//     res.send("i am create");
// })

// app.get('/checks',function(req, res, next){
//    console.log(req.session.polo);
// })

// app.listen(3000);


// Connect Flash
const express = require('express');
const app = express();
const expressSession  = require("express-session")
const flash = require("connect-flash")

app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:"anything"
}))

app.use(flash());

app.get("/",function(req,res,next){
    req.flash("error","Invalid Credentails")
    res.redirect("/error")
})

app.get("/error",function(req,res,next){
    let message = req.flash("error")
    res.send("message");
})

app.listen(3000);