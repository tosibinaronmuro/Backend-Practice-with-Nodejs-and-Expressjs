let {cars}=require('../data')

const getCars=(req,res)=>{
    res.status(200).json({success:true,data:cars})
}




const addCar=(req,res)=>{
const {name}=req.body
console.log(req.body)
if(!name){
  return  res.status(404).json({success:false,msg:`unable to find resource of ${name}`})
}
res.status(200).json({success:true,data:[...cars , name]})

}

const editCar=(req,res)=>{
    const {id}=req.params
    const {name}=req.body
    const editedcar=cars.find((car)=>car.id===Number(id))
    if(!editedcar){
        res.status(404).json({success:false,msg:`cannot find car with id of ${id}`})
    }
    const newCar=cars.map((car)=>{
        if (car.id===Number(id)){
            car.name=name
        }
        return car
    })
    res.status(200).json({success:true,data:newCar})

}
module.exports={getCars,addCar,editCar}