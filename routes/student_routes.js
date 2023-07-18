const express=require('express')
const router=express.Router()

const {AddStudent}=require("../controller/student_controller")


router.post("/insert",AddStudent)


module.exports=router