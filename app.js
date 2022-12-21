const os = require('os')
const path=require('path')
const fs=require('fs')
const http=require('http')
const user=os.userInfo()

const currentOS={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
// console.log(currentOS)
// console.log(user)
// console.log(`this system has been running for ${os.uptime()} seconds`)
const filePath=path.join('./views','home.ejs')
const basename=path.basename(filePath)

const absolute=path.resolve(__dirname,'views','home')
// console.log(basename,absolute) 

// console.log(fs.readFileSync(filePath,'utf8'))
// fs.writeFileSync('./views/newFile.txt','hello wolld')
fs.readFile('./views/newFile.txt','utf8',(err,result )=>{
if (err){
    // console.log(`the error is ${err}`)
    return  
   
}
else{
       
}
 

}) 
fs.writeFile ('./views/newFile.txt','hello world, my name is Tosiron',(err,result)=>{
    if (err){
        // console.log(err)
        return
    }
    else{
        return 'how are you my frind'
    }
})



const server=http.createServer((req,res)=>{
  if(req.url==='/'){
res.write('hello there and welcome to our homepage ')
res.end()
  }
else if(req.url==='/about'){
    res.end('welcome to the aboudst page')
     
  }
  else{
    res.end(`<h1>Oops!</h1>
  <p>we cant find the page youre looking for...</p>
  <p>click <a href='/'>here</a></p>
  `)}
  
})

server.listen(3200,()=>{console.log('listening at port 3200')})