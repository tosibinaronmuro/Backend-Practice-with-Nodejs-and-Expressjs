const express=require('express')
app=express()
const morgan=require('morgan')
const logger=require('./logger')
const authorize=require('./authorize')


// app.use('/',[logger,authorize])
app.use(morgan('tiny'))

app.get('/', (req,res)=>{
    res.send('home page')
   
})
app.get('/about', (req,res)=>{
    res.send('About page')
})
app.get('/api/products' , (req,res)=>{
    res.send('products page')
})
app.get('/api/items' , (req,res)=>{
    res.send('items page')
})
app.all('*', (req,res)=>{
    res.status(404).send('error 404')
})

 

app.listen(3400,()=>{
    console.log('listening to new server on port 3400');
})