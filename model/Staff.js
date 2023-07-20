const mongoose = require('mongoose')
const { Schema } = mongoose

const Staff = new Schema({
    profile_img: {
        type: String,
        required: false
    },
    staff_name: {
        type: String,
        required: true
    },
    employee_code: {
        type: String,
        required: true,
        unique: true
    },
    employee_type: {
        type: String,
        required: true
    },
    employee_category: {
        type: String,
        required: true
    },


    role_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    doj: {
        type: String,
        required: true
    },
    gname: {
        type: String,
        required: true
    },
    relationship: {
        type: String,
        required: true
    },
    gcontact: {
        type: Number,
        required: true
    },
    paddress: {
        type: String,
        required: true
    },
    taddress: {
        type: String,
        required: true
    },
    contact_no1: {
        type: Number,
        required: true,
        unique:true
    },
    contact_no2: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dob: {
        type: String,
        required: true,

    },
    blood_group: {
        type: String,
        required: true,

    },
    gender: {
        type: String,
        required: true,

    },
    marital_status: {
        type: String,
        required: true,

    },
    created_at: {
        type: Date,
        default: Date.now()

    },
    updated_at: {
        type: Date,
        required: false

    },
    pan_no: {
        type: String,
        required: false

    },
    adhar_no: {
        type: String,
        required: false

    }
})

module.exports=mongoose.model("staff",Staff)