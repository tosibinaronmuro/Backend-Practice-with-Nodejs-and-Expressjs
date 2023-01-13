const express=require('express')
const router=express.Router()

router.post('/',(req,res)=>{
    const {Name}=req.body
    if(Name){
       return res.status(200).send(`hello there ${req.body.Name}`)
    }
       return res.status(401).send('username not found')
  
   
  })
  
  
  router.post('/dashboard',(req,res)=>{
    const {Name}=req.body
    if(Name){
     return res.status(200).send(`welcome back ${Name}`)
    }
    return res.status(401).send('unauthorized')
    
   })

module.exports=router