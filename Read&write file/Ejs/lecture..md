install ejs from npm 
  npm i ejs

app.set('view engine', 'ejs');
create a views folder
create a view index.ejs
load the html in the ejx page
and use res.render in place of the res.send to render any page from views folder

 
ejs syntax = <%= %>
ye bhut fast hota hai react se 
server side rendering bhut tej hoti hai 

server side pr templating side ke code likhe hote hai server padhta hai

ye bhut tez load hota hai
++++++++++++++++++

How to handle form in ejs

form jab bhi submit hoga to sabhi fields ke pass name property compulsory
form ke paas action hona chahiye
backend ke pass route hai ya nhi
route ka type sahi hona chahiye
Route ke andar data unke type ke hissab se milta hai

GET -  req.query
PosT- req.body
method post ka use tab hota hai jab url me data show nhi krna hota 


+++++++++++++++

app.use(express.json()) framework library 
app.use(express.urlencoded({extended : true}))
form ko support krne ke liye 

