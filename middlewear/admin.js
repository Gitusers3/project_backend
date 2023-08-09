const express=require('express')
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')
dotenv.config()



const FetchAdmin=async(req,res,next)=>{
    token=req.header('auth-token')
    if(!token){
        res.status(401).send({message:"Please authenticate using valid token"})
    }
    try{
        const data=jwt.verify(token,process.env.SECRET)
        req.admin=data.admin
        next()

    }catch(err){
        res.status(401).send({message:"Please authenticate using valid token2"})
        console.log(err)
    }



}


module.exports=FetchAdmin