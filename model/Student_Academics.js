const mongoose = require('mongoose')
const { Schema } = mongoose

const Student_Academics = new Schema({
    course: {
        type: Array,
        required: false
    },
    college: {
        type: Array,
        required: false
    },
    percentage: {
        type: Array,
        required: false
    },
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'students'
    },
    
    created_at: {
        type: Date,
        default: Date.now()

    },
    updated_at: {
        type: Date,
        required: false

    }
})

module.exports=mongoose.model("student_academics",Student_Academics)