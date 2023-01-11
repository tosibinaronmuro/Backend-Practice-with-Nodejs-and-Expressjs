const express = require("express");
app = express();
let { people } = require("./data");


app.use(express.static('./frontend'))

app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true, data:people})
})

app.post('/api/people',(req,res)=>{
  const  { name }=req.body
  console.log(req.body)
  if(!name){
    return res.status(400).json({success:false,msg:'please provide a real name'})
  }
    res.status(201).json({success:true, person: name})
})

app.put('/api/people/:id',(req,res)=>{
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

app.delete('/api/people/:id',(req,res)=>{

  const{id}=req.params
  const person=people.find((person)=>person.id===Number(id))
  if (!person){
    return res.status(404).json({success:false,msg:`person with id of ${id} not found `})
  
    }
  const newPeople=people.filter((person)=> person.id !== Number(id) )
  return res.status(200).json({success:true,data:newPeople})
})

app.post('/api/postman/people',(req,res)=>{
  const {name}=req.body;
  if(!name){
    return res.status(400).json({success:false ,msg:'please provide a damn name'})
  }
  res.status(201).send({success:true,people: [...people, name]})

})

app.post('/login',(req,res)=>{
    const {Name}=req.body
    if(Name){
       return res.status(200).send(`hello there ${req.body.Name}`)
    }
       return res.status(401).send('username not found')

   
})
app.post('/dashboard',(req,res)=>{
 const {Name}=req.body
 if(Name){
  return res.status(200).send(`welcome back ${Name}`)
 }
 return res.status(401).send('unauthorized')
 
})

app.delete('/api/postman/:id',(req,res)=>{
  const {id}=req.params
  const person=people.find((person)=>{person.id===Number(id)})
  if(!person){
    res.status(404).json({successful:false,msg:'cannot find resource'})
  }
 const newPeople=people.map((newPeople)=>{
  if(newPeople.id!==person){return newPeople}
 })
  return res.status(200).json({successful:true,data:newPeople})
})

app.listen(3400, () => {
  console.log("listening to new server on port 3400");
});
