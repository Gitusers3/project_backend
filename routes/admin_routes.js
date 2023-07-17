const express = require('express');
const router = express.Router();
const { Login,Register} = require('../controller/admin_controller')


router.post('/login',Login)
router.post('/register',Register)



module.exports=router;