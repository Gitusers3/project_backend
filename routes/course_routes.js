const express = require('express');
const router = express.Router();


const {AddCourse} = require('../controller/course_controller')
router.post('/course',AddCourse)

module.exports=router;