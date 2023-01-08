const express = require("express");
app = express();
let { people } = require("./data");

app.use(express.static('./frontend'))
app.use(express.urlencoded({extended:false}))
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true, data:people})
})

app.post('/login',(req,res)=>{
    console.log(req.body.Name );
    if(req.body){
       return res.send(`hello there ${req.body.Name}`)
    }
    else{
       return res.send('username not found')
    }
   
})


app.listen(3400, () => {
  console.log("listening to new server on port 3400");
});
