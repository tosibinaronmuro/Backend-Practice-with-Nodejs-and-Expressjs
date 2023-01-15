const express=require('express')
const router=express.Router()
const {getCars,addCar,editCar,deleteCar}=require('../functions/getCars')


router.get('/',getCars)
router.post('/',addCar)
router.put('/:id',editCar)
router.delete('/:id',deleteCar)
module.exports=router