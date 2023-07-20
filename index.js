require ('dotenv').config()
const express=require('express');
const mongoose=require('mongoose');
const bycrypt=require('bcryptjs')
const app=express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use('/api/admin',require('./routes/admin_routes'));
app.use('/api/college',require('./routes/college_routes'));
app.use('/api/course',require('./routes/course_routes'));
app.use('/api/division',require('./routes/division_routes'));


app.use('/api/intership',require('./routes/intership_routes'));

app.use('/api/student',require('./routes/student_routes'))
app.use('/api/staff',require('./routes/staff_routes'))
app.use('/api/role',require('./routes/role_routes'))


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("connecting to databse on port", process.env.PORT)
    })
})
.catch((er)=>{
    console.error(er)
})


// const  pass=async()=>{
//     let salt=await bycrypt.genSalt(10)
//     console.log(salt)
// let password="1234"

// let pass=await bycrypt.hash(password,salt)
// console.log(pass)
// }
// pass()
