
const mongoose=require('mongoose')
const {Schema}=mongoose


const Course=new Schema({

    cou_name :{
        type: String,
        required:true

    },
    a_date :{
        type: Date,
        default:Date.now()
    },
    u_date :{
        type: Date,
        required:true
    },
    cou_status: {
        type: String,
        required:true
    }
    
})
module.exports=mongoose.model("courses",Course)