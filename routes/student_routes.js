const express=require('express')
const router=express.Router()
const multer=require('multer')
const {AddStudent,ViewStudent,ViewOne,DeleteStudent,UpdateStudent,UpdateProfilePicture}=require("../controller/student_controller")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, uniqueSuffix  + '-' +file.originalname )
    }
  })
  const upload = multer({ storage: storage })

router.post("/insert",AddStudent)
router.get("/view",ViewStudent)
router.get("/view/:id",ViewOne)
router.delete("/delete/:id",DeleteStudent)
router.put("/update/:id",UpdateStudent)
router.put("/update_profile/:id",upload.single('name'),UpdateProfilePicture)


module.exports=router