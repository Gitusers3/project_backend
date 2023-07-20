const express=require('express')
const router=express.Router()
const {Insert,View,Delete}=require('../controller/staff_controller')



router.post("/insert",Insert)
router.get("/view",View)
router.delete("/delete/:id",Delete)


module.exports=router