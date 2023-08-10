const express=require('express')
const router=express.Router()
const {add_intership,view_intership,view_one_intership}=require('../controller/intership_controller')
const FetchAdmin=require("../middlewear/admin")


router.post('/add_intership',add_intership)
router.get('/view_intership',FetchAdmin,view_intership)
router.get('/view_one_intership/:id',view_one_intership)

module.exports=router