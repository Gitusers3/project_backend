const express = require('express');
const router = express.Router();


const {AddBatch, ViewBatch,DeleteBatch, UpdateBatch, ViewOneBatch} = require('../controller/batch_controller')
router.post('/insert',AddBatch);
router.get('/view',ViewBatch);
router.delete('/delete/:id',DeleteBatch);
router.put('/update/:id',UpdateBatch);
router.get('/viewbatch/:id',ViewOneBatch);

module.exports=router;