 const express=require('express')
 const app=express()
 const path=require('path')

//  setup static resources and middleware
 app.use(express.static('./frontend'))


 app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'./frontend/index.html'))
 })

app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})
 app.listen(3300,()=>{
    console.log('listening to the server on port 3300')
 })