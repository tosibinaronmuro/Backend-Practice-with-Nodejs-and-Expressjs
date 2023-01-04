 const express=require('express')
 const app=express()
const {randomData}=require('./data')

 app.get('/',(req,res)=>{
    res.status(200).send('<h4>hellooo there and welcome to our homepage click </h4><a href="./api/products">here</a>')
 
 })
 app.get('/api/products',(req,res)=>{
    const users=randomData.map((user)=>{
         
        
        return user.users.map((person)=>{
            const {name,work,email,dob}=person;
            return {name,work,email,dob}
        })
    })
    res.status(200).send(users)

    // res.status(200).send(randomData)
 })
app.all('*',(req,res)=>{
    res.status(404).send('<h4>page not found... click  </h4><a href="/">here</a>')
})


 app.listen(3300, ()=>{
    console.log('listening to the app on port 3300');
 })

