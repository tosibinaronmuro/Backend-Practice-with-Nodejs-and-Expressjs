//  const express=require ('express');
//  const app=express();
//  const path=require('path')


// app.use(express.urlencoded({extended:false }))
// app.use(getWeather)

// app.set('view engine','ejs')
// app.set('views', path.join(__dirname,'views') )
// function getWeather(req,res,next){
// req.visitorweather= false;
// if (!req.visitorweather ){
   
//   next()
// }
// else{
//   res.send('please come back when its not raining')
  
// }
// }

// const pets = [
//   {
//   'name':'juliet',
//   'species':'cat'
// }
//   ,{
//     'name':'romeo',
//     'species':'dog'
//   }
//   ]
//  app.get('/' ,(req,res)=>{
//   res.render('home',{
//     isRaining:req.visitorweather,
//    pets
//   })
// })

// app.get('/api/pets',(req,res)=>{
// res.json( pets)

// })

// app.get('/about',(req,res)=>{
//   res.send('welcome to our about  ')
// })

// app.post('/result', (req,res)=>{
// if(req.body.name.trim().toLowerCase()==='tosiron'){
// res.send('correct, congratulations')
// }
// else{
//   res.send(`incorrect, the answer is not '${req.body.name.trim().toLowerCase()}' try again okay `)
// } 
// })


 
//  app.listen(3200,()=>{  
//   console.log('listening at port 3200')
//  } )
//  const os = require('os')
// const path=require('path')
// const fs=require('fs')
// const http=require('http')
// const user=os.userInfo()

// const currentOS={
//     name:os.type(),
//     release:os.release(),
//     totalmem:os.totalmem(),
//     freemem:os.freemem()
// }
// // console.log(currentOS)
// // console.log(user)
// // console.log(`this system has been running for ${os.uptime()} seconds`)
// const filePath=path.join('./views','home.ejs')
// const basename=path.basename(filePath)

// const absolute=path.resolve(__dirname,'views','home')
// // console.log(basename,absolute) 

// // console.log(fs.readFileSync(filePath,'utf8'))
// // fs.writeFileSync('./views/newFile.txt','hello wolld')
// fs.readFile('./views/newFile.txt','utf8',(err,result )=>{
// if (err){
//     // console.log(`the error is ${err}`)
//     return  
   
// }
// else{
       
// }
 

// }) 
// fs.writeFile ('./views/newFile.txt','hello world, my name is Tosiron',(err,result)=>{
//     if (err){
//         // console.log(err)
//         return
//     }
//     else{
//         return 'how are you my frind'
//     }
// })



// const server=http.createServer((req,res)=>{
//   if(req.url==='/'){
// res.write('hello there and welcome to our homepage ')
// res.end()
//   }
// else if(req.url==='/about'){
//     res.end('welcome to the aboudst page')
     
//   }
//   else{
//     res.end(`<h1>Oops!</h1>
//   <p>we cant find the page youre looking for...</p>
//   <p>click <a href='/'>here</a></p>
//   `)}
  
// })

// server.listen(3200,()=>{console.log('listening at port 3200')})



// const http = require("http");

// const {readFileSync} =require('fs')


// const homePage=readFileSync('./frontend/index.html','utf-8',()=>{})

//   http.createServer((req, res) => {
//  if(req.url==='/'){
//   res.writeHead(200,{'content-type':'text/html'})
//   res.write(homePage)
//   res.end()
//  }
//  else if(req.url==='/about'){
//   res.writeHead(200,{'content-type':' text/html'})
//   res.write("{'name' :'tosiron', 'age':'39'}")
//  }
//  else{
//   res.writeHead(404,{'content-type':'text/json'})
//   res.write('error 404, page not found')
//  }
// });

// server.listen(3300);
