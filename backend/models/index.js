

const Students = require("./students")
const IdentityCard = require("./identityCard")
const Department = require("./department")
const Courses = require("./courses")    
const StudentCourses = require('./studentCourses')
Students.hasOne(IdentityCard)
IdentityCard.belongsTo(Students)


// one to many
Department.hasMany(Students)
Students.belongsTo(Department)

// many to many 

Students.belongsToMany(Courses, { through: StudentCourses })
Courses.belongsToMany(Students,{through:StudentCourses})

module.exports = {
    Students,
    IdentityCard,
    Courses,
    StudentCourses
}