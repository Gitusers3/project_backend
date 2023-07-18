const express = require('express')
const Student = require('../model/Student')
const { findByIdAndDelete } = require('../model/Admin')
require('dotenv').config


const AddStudent = async (req, res) => {
    try {
        const { division_id, our_reg_no, student_name, address, image, whatsup, contact_no1, contact_no2, email_id, parent_or_guardian_name, parent_contact, course_id, university_reg_no, college_id, fees, paystatus, reg_status, reg_fees, status, t_address, p_address, t_pincode, t_state, t_district, p_pincode, p_state, p_district, relationship, stream, sem, status_student, all_status,date_of_admission } = req.body

        let c = new Student({ division_id: division_id, our_reg_no: our_reg_no, student_name: student_name, address: address, image: image, whatsup: whatsup, contact_no1: contact_no1, contact_no2: contact_no2, email_id: email_id, parent_or_guardian_name: parent_or_guardian_name, parent_contact: parent_contact, course_id: course_id, university_reg_no: university_reg_no, college_id: college_id, fees: fees, paystatus: paystatus, reg_status: reg_status, reg_fees: reg_fees, status: status, t_address: t_address, p_address: p_address, t_pincode: t_pincode, t_state: t_state, t_district: t_district, p_pincode: p_pincode, p_state: p_state, p_district: p_district, relationship: relationship, stream: stream, sem: sem, status_student: status_student, all_status: all_status,date_of_admission:date_of_admission })
        let savedStudent = await c.save();
        res.json({ success: true, savedStudent })
        console.log("Student details added successfully")
        console.log(req.method)
        console.log(savedStudent)

    } catch (err) {
        console.error(err.message)
        res.status(500).send("Some internal ERROR occured !")
    }

}


const ViewStudent = async (req, res) => {
    try {
        const st = await Student.find()
        if (!st) {
            res.json({ success: false, message: "No Records Found" })
        } else {
            res.json({ success: true, st })
            console.log(req.method)
            console.log(st)
        }

    } catch (err) {
        console.error(err.message)
        res.json({ success: false, message: "Some Internal Error Occured!" })
    }

}



const ViewOne = async (req, res) => {
    try {
        const s1 = await Student.findById(req.params.id)
        if (!s1) {
            res.json({ success: false, message: "Not Found" })
            res.status(400).send("Not Found")
        } else {
            res.json(s1)
            console.log(req.method)
            console.log(s1)
        }

    } catch (err) {
        console.error(err.message)
        res.status(500).send("Some Internal Error Occured")
    }
}

const DeleteStudent = async (req, res) => {
    try {
        const s1 = await Student.findById(req.params.id)
        if (!s1) {
            res.json({ success: false, message: "Not Found" })

        } else {
            const s2 = await Student.findByIdAndDelete(s1)
            res.json({ success: true, s2 })
            console.log(req.method)
            console.log(s2)
        }
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Some Internal Error Occured")
    }


}

const UpdateStudent = async (req, res) => {
    try {
        const { division_id, student_name, address, image, whatsup, contact_no1, contact_no2, email_id, parent_or_guardian_name, parent_contact, course_id, university_reg_no, college_id, fees, paystatus, reg_status, reg_fees, status, t_address, p_address, t_pincode, t_state, t_district, p_pincode, p_state, p_district, relationship, stream, sem, status_student, all_status,updated_at } = req.body

        const s1 = await Student.findById(req.params.id)
      
        if (!s1) {
            res.json({ success: false, message: "Record Not Found" })


        } else {
            const newStudent = {}
            if (division_id) { newStudent.division_id = division_id }
            if (student_name) { newStudent.student_name = student_name }
            if (address) { newStudent.address = address }
            if (image) { newStudent.image = image }
            if (whatsup) { newStudent.whatsup = whatsup }
            if (contact_no1) { newStudent.contact_no1 = contact_no1 }
            if (contact_no2) { newStudent.contact_no2 = contact_no2 }
            if (division_id) { newStudent.division_id = division_id }
            if (email_id) { newStudent.email_id = email_id }
            if (parent_or_guardian_name) { newStudent.parent_or_guardian_name = parent_or_guardian_name }
            if (parent_contact) { newStudent.parent_contact = parent_contact }
            if (course_id) { newStudent.course_id = course_id }
            if (university_reg_no) { newStudent.university_reg_no = university_reg_no }
            if (college_id) { newStudent.college_id = college_id }
            if (fees) { newStudent.fees = fees }
            if (paystatus) { newStudent.paystatus = paystatus }
            if (reg_status) { newStudent.reg_status = reg_status }
            if (reg_fees) { newStudent.reg_fees = reg_fees }
            if (status) { newStudent.status = status }
            if (t_address) { newStudent.t_address = t_address }
            if (p_address) { newStudent.p_address = p_address }
            if (p_state) { newStudent.p_state = p_state }
            if (p_district) { newStudent.p_district = p_district }
            if (p_pincode) { newStudent.p_pincode = p_pincode }
            if (t_district) { newStudent.t_district = t_district }
            if (t_pincode) { newStudent.t_pincode = t_pincode }
            if (t_state) { newStudent.t_state = t_state }
            if (relationship) { newStudent.relationship = relationship }
            if (stream) { newStudent.stream = stream }
            if (sem) { newStudent.sem = sem }
            if (status_student) { newStudent.status_student = status_student }
            if (all_status) { newStudent.all_status = all_status }
            if (updated_at) { newStudent.updated_at = updated_at }


            const UpdateStudent = await Student.findByIdAndUpdate(req.params.id, { $set: newStudent }, { new: true })



            res.json({ success: true, message: "Updated Successfull", UpdateStudent })
            console.log(req.method)
            console.log(UpdateStudent)


        }

    } catch (err) {
        console.error(err.message)
        res.status(500).send("Some Internal Error Occured")

    }
}


module.exports = { AddStudent, ViewStudent, ViewOne, DeleteStudent,UpdateStudent }