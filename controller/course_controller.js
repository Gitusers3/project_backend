const express = require('express');
const Course=require('../model/Course');


require('dotenv').config



const AddCourse= async (req,res)=>{
    try{ const{cou_name,u_date,cou_status}=req.body;
     let course= new Course({cou_name,u_date,cou_status});
     let savedCourse= await course.save();
     res.json({ success: true, savedCourse })
    }
    catch (err) {
     res.json({ success: false, message: "Internal server error!!!" })
     console.log(err)
 }
 }
 
 
 
 
 module.exports={AddCourse}
 
 
