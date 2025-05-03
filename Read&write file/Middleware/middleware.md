Kind of Defination
Whenever you send a request to backend server it goes to it route and if you want to check anything before went there or you need any updation and modification then in that cases middleware came in the work


How to find that a function is middleware?
any function who pass the param of req res next is Known as middleware and it work only when you use "use" 
like 
app.use(req, res, next){
    res.send("this is request")
    next()
}

++++++++++++++Expess Section Middlewar+++++++++++

Cookie => use to save data on browser
session => use to save data on server the main cause of session is that whenver the server got restart all data will removed
 
the syntax 
app.use(session({
    secret: 'random stuff',
    resave: false, [In your session if there is no change then it don't store any value ]
    saveUninitialized: false [if any user come and he doesn't do anything]
}));