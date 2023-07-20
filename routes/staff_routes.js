const express=require('express')
const router=express.Router()
const {Insert,View,Delete,ViewOne,Update}=require('../controller/staff_controller')



router.post("/insert",Insert)
router.get("/view",View)
router.get("/viewone/:id",ViewOne)
router.delete("/delete/:id",Delete)
router.put("/update/:id",Update)


module.exports=router