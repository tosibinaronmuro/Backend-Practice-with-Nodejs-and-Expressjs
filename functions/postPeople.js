let { people } = require("../data");
const postPerson=(req,res)=>{
    const  { name }=req.body
    console.log(req.body)
    if(!name){
      return res.status(400).json({success:false,msg:'please provide a real name'})
    }
      res.status(201).json({success:true, person: name})
  }

const postToPostman=(req,res)=>{
    const {name}=req.body;
    if(!name){
      return res.status(400).json({success:false ,msg:'please provide a damn name'})
    }
    res.status(201).send({success:true,people: [...people, name]})
  
  }

  module.exports={postPerson,postToPostman}
