const express = require('express');
const Admin = require('../model/Admin');


const bycrypt=require('bcryptjs')
const jwttoken=require('jsonwebtoken')
require('dotenv').config
const Register = async (req, res) => {
    try {
        const { name, phone, email, password,status } = req.body
        let admin = await Admin.findOne({a_email:email })
        if (admin) {
            return res.json({ success: false, message: "email already exist" })
        }
        let salt = await bycrypt.genSalt(10)
        let secPass = await bycrypt.hash(password, salt)
        admin = new Admin({ a_name:name,a_email: email, a_phone:phone, a_password: secPass,a_status:status })
        let savedAdmin = await admin.save()
        res.json({ success: true, savedAdmin })
    }
    catch (err) {
        res.json({ success: false, message: "Internal server error!!!" })
        console.log(err)
    }
}
const Login=async(req,res)=>{
    const {aemailorphone,apassword}=req.body;
    // console.log(aemailorphone)
    // console.log(apassword)
    const admin=await Admin.findOne({$or:[{a_email:aemailorphone},{a_phone:aemailorphone}]})
    // console.log(admin.a_email)
    if(!admin){
        res.json({success:false,message:"unsuccessfull"})
    }else{
        const passwordCompare=await bycrypt.compare(apassword,admin.a_password)
        if(!passwordCompare){
            res.json({success:false,message:"Wrong Credential"})
        }else{
        const data={
            admin:{
                id:Admin.id
            }
        }
        let authToken = await jwttoken.sign(data, process.env.SECRET)
        res.json({ success: true, authToken ,message:"Login Success"})
    }
    }
}




module.exports={Login, Register}

