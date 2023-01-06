const logger=(req,res,next)=>{
    const method=req.method;
    const url=req.url
   const time= `${new Date().getDay()},${new Date().getMonth()},${new Date().getFullYear()}`
   console.log( 'the method is ' +method, 'the url is '+url, 'and the date is '+time);
   next()
}

module.exports=logger