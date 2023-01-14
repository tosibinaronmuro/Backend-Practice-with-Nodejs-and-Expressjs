const express=require('express')
const router=express.Router()
const {getCars,addCar,editCar}=require('../functions/getCars')


router.get('/',getCars)
router.post('/',addCar)
router.put('/:id',editCar)
module.exports=router