const Staff=require('../model/Staff')



const Insert=async(req,res)=>{
    try{
    const {profile_img,staff_name,employee_code,employee_type,employee_category,role_id,designation,doj,gname,relationship,gcontact,paddress,taddress,contact_no1,contact_no2,email,dob,blood_group,gender,marital_status,pan_no,adhar_no}=req.body

    const s1=new Staff({
        profile_img:profile_img,
        staff_name:staff_name,
        employee_code:employee_code,
        employee_type:employee_type,
        employee_category:employee_category,
        role_id:role_id,
        designation:designation,
        doj:doj,
        gname:gname,
        relationship:relationship,
        gcontact:gcontact,
        paddress:paddress,
        taddress:taddress,
        contact_no1:contact_no1,
        contact_no2:contact_no2,
        email:email,
        dob:dob,
        blood_group:blood_group,
        gender:gender,
        marital_status:marital_status,
        pan_no:pan_no,
        adhar_no:adhar_no

    })

    const savedStaff=await s1.save()
    res.json(savedStaff)
    console.log(req.method)
    console.log("Inserted Successfully")
    console.log(savedStaff)


    }catch(err){
        console.error(err.message)
        res.json({success:false,message:"Internal Error occured"})
    }

}


const View=async(req,res)=>{
    try{
        const s1=await Staff.find()
        if(!s1){
            res.json({success:false,message:"No records Found "})
            console.log("No records Found")


        }else{
            res.json(s1)
            console.log("Inserted Successfully")
            console.log(req.method)
            console.log(s1)

        }

    }catch(err){
        console.error(err.message)
        res.json({success:false,message:"Some Internal Error"})
    }
}


const Delete=async(req,res)=>{
    try{
        const s1=await Staff.findById(req.params.id)
        if(!s1){
            console.json({success:false,message:"Records Not Found"})


        }else{
            const deletedStudent=await Staff.findByIdAndDelete(s1)
            res.json(deletedStudent)
            console.log(deletedStudent)
            console.log(req.method)
            console.log("Deleted Successfully")



        }

    }catch(err){
        console.error(err.message)
        console.json({success:false,message:"Some Internal Error Occured"})
    }

}

module.exports={Insert,View,Delete}