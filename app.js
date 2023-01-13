const express = require("express");
app = express();

const people=require('./routes/people')
const login=require('./routes/auth')

app.use(express.static('./frontend'))

app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.use('/api/people',people)

app.use('/login',login)


 app.delete('/api/postman/:id',(req,res)=>{
  const{id}=req.params
  const person=people.find((person)=>person.id===Number(id))
  if (!person){
    return res.status(404).json({success:false,msg:`person with id of ${id} not found `})
    }
const newPeople=people.filter((person)=>person.id!==person)
 console.log(newPeople)
  return res.status(200).json({successful:true,data:newPeople})
})
app.listen(3400, () => {
  console.log("listening to new server on port 3400");
});
