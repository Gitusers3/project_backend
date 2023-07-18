const express=require('express')
const Student=require('../model/Student')
require('dotenv').config


const AddStudent=async(req,res)=>{
    try{
        const {division_id,our_reg_no,student_name,address,image,whatsup,contact_no1,contact_no2,email_id,parent_or_guardian_name,parent_contact,course_id,university_reg_no,college_id,fees,paystatus,reg_status,reg_fees,status,place,p_address,t_pincode,t_state,t_district,p_pincode,p_state,p_district,relationship,stream,sem,status_student,all_status}=req.body

        let c=new Student({division_id:division_id,our_reg_no:our_reg_no,student_name:student_name,address:address,image:image,whatsup:whatsup,contact_no1:contact_no1,contact_no2:contact_no2,email_id:email_id,parent_or_guardian_name:parent_or_guardian_name,parent_contact:parent_contact,course_id:course_id,university_reg_no:university_reg_no,college_id:college_id,fees:fees,paystatus:paystatus,reg_status:reg_status,reg_fees:reg_fees,status:status,place:place,p_address:p_address,t_pincode:t_pincode,t_state:t_state,t_district:t_district,p_pincode:p_pincode,p_state:p_state,p_district:p_district,relationship:relationship,stream:stream,sem:sem,status_student:status_student,all_status:all_status})
        let savedStudent=await c.save();
        res.json({success:true,savedStudent})
        console.log("Student details added successfully")
        console.log(req.method)
        console.log(savedStudent)

    }catch(err){
        console.error(err.message)
        res.status(500).send("Some internal ERROR occured !")
    }

}


module.exports={AddStudent}