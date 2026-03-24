const Courses = require("../models/courses")
const Students = require("../models/students")


const addCourses = async (req,res) => {

    try {
        const { name } = req.body
        const course =await Courses.create({ "name": name })
        res.status(201).json(course)
} catch (error) {
    res.json({error})
}
}

const addStudentToCourses = async (req, res) => {
    
try {
    const { StudentId, courseId } = req.body;

   
    const student = await Students.findByPk(StudentId);
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

   
    const course = await Courses.findByPk(courseId);
    if (!course) {
        return res.status(404).json({ message: "Course not found" });
    }

   
    await student.addCourse(course); 

    
    const updatedStudent = await Students.findByPk(StudentId, {
        include: Courses
    });

    res.status(200).json(updatedStudent);

} catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
}

}

module.exports = {addCourses,addStudentToCourses}