const express = require("express");
app = express();
let { people } = require("./data");

app.use(express.static('./frontend'))
app.use(express.urlencoded({extended:false}))
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true, data:people})
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


app.listen(3400, () => {
  console.log("listening to new server on port 3400");
});
