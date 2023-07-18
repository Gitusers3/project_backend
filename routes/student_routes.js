const express=require('express')
const router=express.Router()

const {AddStudent,ViewStudent,ViewOne,DeleteStudent,UpdateStudent}=require("../controller/student_controller")


router.post("/insert",AddStudent)
router.get("/view",ViewStudent)
router.get("/view/:id",ViewOne)
router.delete("/delete/:id",DeleteStudent)
router.put("/update/:id",UpdateStudent)


module.exports=router