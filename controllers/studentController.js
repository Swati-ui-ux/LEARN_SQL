

const db = require("../utils/connection_db")
const Students = require("../model/students")


const postStudentData = async(req, res) => {
    try {
    const { name, email, age } = req.body
        const student = await Students.create({
         name,email,age
        })
        res.status(200).send("student created",student)
    } catch (error) {
        console.log("Error", error.message)
        res.status(500).send("Student no created")
    }
}

const getAllStudentData = (req, res) => {
    const queryToGetStudent = "SELECT * FROM students" 
    db.execute(queryToGetStudent, (err, result) => {
        if (err) {
            res.status(500).send("Error when get students", err.message)
            db.end()
            return;
        }
        if(result.length===0) return res.status(404).send("Students is not here")
     res.status(200).json(result)
    })
}
const getStudentWithId = (req, res) => {
    const { id } = req.params
    const query = `SELECT * FROM students WHERE id =?`
    db.execute(query, [id], (err, result) => {
        if (err) {
        res.status(500).send("Error when get student with id",err.message)
            db.end()
            return;
        }
        if(result.affectedRows===0) return res.status(404).send("student not found")
    res.status(200).json(result)
    })
  
}



const updateStudentWithId = async(req,res) => {
    try {
        const { id } = req.params
    const { name, email, age } = req.body
    
        const student = await Students.findByPk(id)
        console.log("Stdent",student)
    if (!student) {
    return res.status(404).send("Student not found")
        }
        
        student.name = name,
            student.email = email,
            student.age = age,
            await student.save();
    res.status(200).send("Student is updated")
    } catch (error) {
        res.status(500).send("Erro when update",error.message)
    }
}


const deleteStudentWithId = async (req, res) => {
    
    try {
        const { id } = req.params
        const student = await Students.destroy({
            where: {
            id:id
            }
        })
        if (!student) {
        return res.status(404).send("Student not found")
        }
        res.status(200).send("Student is deleted")
        
        
    } catch (error) {
        res.status(500).send("Error when delete student",error.message)
    }
    

}
module.exports = {postStudentData,getAllStudentData,getStudentWithId,deleteStudentWithId,updateStudentWithId}