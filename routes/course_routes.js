const express = require('express');
const router = express.Router();
const {AddCourse, ViewCourses} = require('../controller/course_controller')
router.post('/insert',AddCourse)
router.get('/view',ViewCourses)

module.exports=router;