let { people } = require("../data");
const putPerson=(req,res)=>{
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
   
   }

   module.exports=putPerson