 const express=require('express')
 const app=express()
const {randomData}=require('./data')

 app.get('/',(req,res)=>{
    res.status(200).send('<h4>hellooo there and welcome to our homepage click </h4><a href="./api/products">here</a>')
 
 })
 app.get('/api/products',(req,res)=>{
    const users=randomData.map((user)=>{
       const {id,name,address,dob,workcity}=user
       return {id,name,address,dob,workcity}
        })
        res.status(200).send(users)
    })
   
 
 
 app.get('/api/products/:userID',(req,res)=>{
    
    const {userID}=req.params;
        const singleUser=randomData.find((user)=>user.id===Number(userID))
        res.status(200).send(singleUser)
    })
   
app.all('*',(req,res)=>{
    res.status(404).send('<h4>page not found... click  </h4><a href="/">here</a>')
})


 app.listen(3300, ()=>{
    console.log('listening to the app on port 3300');
 })

