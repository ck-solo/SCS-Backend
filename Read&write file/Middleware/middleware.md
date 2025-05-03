Kind of Defination
Whenever you send a request to backend server it goes to it route and if you want to check anything before went there or you need any updation and modification then in that cases middleware came in the work


How to find that a function is middleware?
any function who pass the param of req res next is Known as middleware and it work only when you use "use" 
like 
app.use(req, res, next){
    res.send("this is request")
    next()
}