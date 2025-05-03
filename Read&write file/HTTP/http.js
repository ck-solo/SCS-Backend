const http = require('node:http')

const server = http.createServer(function(req,res){
  if(req.url === '/'){
      res.end("hey")
  }
  else if(req.url === '/about'){
    res.end("About")
  }
  else if(req.url === '/home'){
    res.end("THis is home page")
  }
  else if(req.url === '/Contact'){
    res.end("THis is contact page")
  }
  else if(req.url === '/main'){
    res.end("THis is main page")
  }
})

server.listen(3000);