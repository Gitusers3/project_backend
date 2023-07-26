const mongoose=require('mongoose')
const {Schema}=mongoose



const Batch=new Schema({
    b_name:{
        type:String,
        required:true
    },
    d_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'division'
    },
    tech_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'staff'
    },
   
    c_date:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        required:true
    },
    u_date:{
        type:Date,
        required:false
    }
})
module.exports=mongoose.model("batch",Batch)