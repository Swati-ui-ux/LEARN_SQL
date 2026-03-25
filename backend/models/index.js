

const Students = require("./students")
const IdentityCard = require("./identityCard")
const Department = require("./department")
const Courses = require("./courses")    
const StudentCourses = require('./studentCourses')
const User = require("./users")
const Booking = require("./booking")
const Buses = require("./buses")
Students.hasOne(IdentityCard)
IdentityCard.belongsTo(Students)


// one to many
Department.hasMany(Students)
Students.belongsTo(Department)

// user one to many relation 
User.hasMany(Booking)
Booking.belongsTo(User)

// bus one to many booking
Buses.hasMany(Booking)
Booking.belongsTo(Buses)

// many to many
Students.belongsToMany(Courses, { through: StudentCourses })
Courses.belongsToMany(Students,{through:StudentCourses})



module.exports = {
    Students,
    IdentityCard,
    Courses,
    StudentCourses
}