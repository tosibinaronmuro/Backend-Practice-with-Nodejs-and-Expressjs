 const { application } = require('express')
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
        res.status(200).json(users)
    })
   
 
 
 app.get('/api/products/:userID',(req,res)=>{
    
    const {userID}=req.params;
        const singleUser=randomData.find((user)=>user.id===Number(userID))
        if (!singleUser){
            return res.status(404).send('<h4>page not found... click  </h4><a href="/">here</a>')
        }
        return res.status(200).json(singleUser)
    })
   
app.get('/api/v1/query',(req,res)=>{
    console.log(req.query)
    const{search,limit,workSearch}=req.query;
    let sortedUsers=[...randomData]
   if (search){
    sortedUsers=sortedUsers.filter((product)=>{
        return product.name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())

    })
   
   }
   if(workSearch){
     sortedUsers= sortedUsers.filter((user)=>{
        return user.work.toLocaleLowerCase().startsWith(workSearch.toLocaleLowerCase())
    })
   }


   if(limit){
    sortedUsers=sortedUsers.slice(0,Number(limit))
    }

    if (sortedUsers.length<1){
        return res.status(200).json({success:true,data:[]})
    }
    
res.status(200).json(sortedUsers)
})


app.all('*',(req,res)=>{
    res.status(404).send('<h4>page not found... click  </h4><a href="/">here</a>')
})


 app.listen(3300, ()=>{
    console.log('listening to the app on port 3300');
 })

