const mongoose=require('mongoose')
const {Schema}=mongoose

const ClTimetable=new Schema({
    dayofweek:{
        type:String,
        required:true
    },
    first_session:{
        type:String,
        required:true
    },
    second_session:{
        type:String,
        required:true
    },
    third_session:{
        type:String,
        required:true
    },
 
 
    status:{
        type:String,
        required:false
    },
  
})

module.exports=mongoose.model("cl_timetable",ClTimetable)