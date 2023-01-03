const http = require("http");

const server = http.createServer((req, res) => {
 if(req.url==='/'){
  res.writeHead(200,{'content-type':'text/html'})
  res.write('<h1>hello world i am tosiron</h1>')
  res.end()
 }
 else if(req.url==='/about'){
  res.writeHead(200,{'content-type':'text/json'})
  res.write("{'name' :'tosiron', 'age':'30'}")
 }
 else{
  res.writeHead(404,{'content-type':'text/json'})
  res.write('error 404, page not found')
 }
});

server.listen(3300);
