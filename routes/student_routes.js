const express=require('express')
const router=express.Router()
const multer=require('multer')
const {AddStudent,ViewStudent,ViewOne,DeleteStudent,UpdateStudent,UpdateProfilePicture,View_Project}=require("../controller/student_controller")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      console.log(file)
      cb(null, uniqueSuffix  + '-' +file.originalname )
    }
  })
  const upload = multer({ storage: storage })

router.post("/insert",upload.single('image'),AddStudent)
router.get("/view",ViewStudent)
router.get("/view/:id",ViewOne)
router.get("/view_project",View_Project)
router.delete("/delete/:id",DeleteStudent)
router.put("/update/:id",UpdateStudent)
router.put("/update_profile/:id",upload.single('name'),UpdateProfilePicture)


module.exports=router