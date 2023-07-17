const express = require('express');
const router = express.Router();


const {AddCollege, ViewCollege} = require('../controller/college_controller')
router.post('/insert',AddCollege);
router.get('/view',ViewCollege);

module.exports=router;