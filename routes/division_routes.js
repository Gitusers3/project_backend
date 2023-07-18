const express=require('express')
const router=express.Router()
const {add_division,view_division,view_one_division}=require('../controller/division_controller')


router.post('/add_division',add_division)
router.get('/view_division',view_division)
router.get('/view_one_division/:id',view_one_division)

module.exports=router