 const express=require ('express');
 const app=express();
 const path=require('path')


app.use(express.urlencoded({extended:false }))
app.use(getWeather)

app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views') )
function getWeather(req,res,next){
req.visitorweather= false;
if (!req.visitorweather ){
   
  next()
}
else{
  res.send('please come back when its not raining')
  
}
}

const pets = [
  {
  'name':'juliet',
  'species':'cat'
}
  ,{
    'name':'romeo',
    'species':'dog'
  }
  ]
 app.get('/' ,(req,res)=>{
  res.render('home',{
    isRaining:req.visitorweather,
   pets
  })
})

app.get('/api/pets',(req,res)=>{
res.json( pets)

})

app.get('/about',(req,res)=>{
  res.send('welcome to our about  ')
})

app.post('/result', (req,res)=>{
if(req.body.name.trim().toLowerCase()==='tosiron'){
res.send('correct, congratulations')
}
else{
  res.send(`incorrect, the answer is not '${req.body.name.trim().toLowerCase()}' try again okay `)
} 
})


 
 app.listen(3200,()=>{  
  console.log('listening at port 3200')
 } )