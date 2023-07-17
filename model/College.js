const mongoose=require('mongoose')
const {Schema}=mongoose



const College=new Schema({
    
    c_name: {
        type:String,
        required:true
    },
    c_address: {
        type:String,
        required:true

    },
     a_date :{
        type: Date,
        default:Date.now()
    },
    c_status :{
        type: String,
        required: true
    }

})
module.exports=mongoose.model("colleges",College)