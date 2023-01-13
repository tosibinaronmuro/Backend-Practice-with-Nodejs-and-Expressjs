let { people } = require("../data");
const deletePerson=(req,res)=>{

    const{id}=req.params
    const person=people.find((person)=>person.id===Number(id))
    if (!person){
      return res.status(404).json({success:false,msg:`person with id of ${id} not found `})
    
      }
    const newPeople=people.filter((person)=> person.id !== Number(id) )
    return res.status(200).json({success:true,data:newPeople})
  }

  module.exports=deletePerson