

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

const getAllStudentData =async (req, res) => {
    try {
        const data = await Students.findAll({})
        console.log(data)
        if (!data) {
        res.status(404).send("Student is not here")
        }
        res.status(200).json(data)
    } catch (error) {
        console.log("Error when get student")
    }
}
const getStudentWithId = async(req, res) => {
    
    try {
    const { id } = req.params
        const data = await Students.findAll({
            where: {
            id
            }
        })
        console.log(data)
        if (!data) {
        res.status(404).send("Student is not here")
        }
        res.status(200).json(data)
    } catch (error) {
        console.log("Error when get student")
    }
  
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