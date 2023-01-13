const express=require('express') 
const router=express.Router()

let { people } = require("../data");


router.get('/',(req,res)=>{
    res.status(200).json({success:true, data:people})
})

router.post('/',(req,res)=>{
  const  { name }=req.body
  console.log(req.body)
  if(!name){
    return res.status(400).json({success:false,msg:'please provide a real name'})
  }
    res.status(201).json({success:true, person: name})
})

router.put('/:id',(req,res)=>{
 const {id}=req.params
 const {name}=req.body
  const person=people.find((person)=>person.id===Number(id))

 if (!person){
  return res.status(404).json({success:false,msg:'person with id not found '})

  }
  const newpeople=people.map((person)=>{
    if(person.id===Number(id)){
      person.name=name
    }
    return person
  })
  res.status(200).json({success:true,data:newpeople})

})

router.delete('/:id',(req,res)=>{

  const{id}=req.params
  const person=people.find((person)=>person.id===Number(id))
  if (!person){
    return res.status(404).json({success:false,msg:`person with id of ${id} not found `})
  
    }
  const newPeople=people.filter((person)=> person.id !== Number(id) )
  return res.status(200).json({success:true,data:newPeople})
})

router.post('/postman',(req,res)=>{
  const {name}=req.body;
  if(!name){
    return res.status(400).json({success:false ,msg:'please provide a damn name'})
  }
  res.status(201).send({success:true,people: [...people, name]})

})




module.exports=router