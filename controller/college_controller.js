const express = require('express');
const College=require('../model/college');
require('dotenv').config

const AddCollege= async (req,res)=>{
    try{ 
        const{c_name,c_address,c_status}=req.body;
     let college= new College({c_name,c_address,c_status});
     let savedCollege= await college.save();
     res.json({ success: true, savedCollege })
     console.log("College inserted successfully")
     console.log(req.method)
     console.log(savedCollege)
    }
    catch (err) {
     res.json({ success: false, message: "Internal server error!!!" })
     console.log(err)
    }
 }

 const ViewCollege = async (req, res)=> {
    try{
        const college= await College.find();
        res.json(college);
    }
    catch (err) {
        res.json({ success: false, message: "Internal server error!!!" })
        console.log(err)
    }

 }
 
 
 
 
 module.exports={AddCollege, ViewCollege}
 
 
