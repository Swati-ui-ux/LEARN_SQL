

const db = require("../utils/connection_db")



const postStudentData = (req,res) => {
    const { name, email, age } = req.body
    const insertQuery = `INSERT INTO students (name,email,age) VALUES ('${name}','${email}','${age}')`
    db.execute(insertQuery, [name, email, age], (err) => {
        if (err) {
            res.status(500).send("Error when post student data", err.message)
            db.end()
            return
        }
    res.status(200).send("Student data send successfully")
    })
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
const updateStudentWithId = (req,res) => {
    const { id } = req.params
    const {name,email,age} = req.body
    const updateQuery = `UPDATE Students SET name=?,email=?,age=? WHERE id=?`
    db.execute(updateQuery, [name, email, age, id], (err, result) => {
     if (err) {
            console.log(err.message)
         res.status(500).send("Error when update student with id",err.message)
            db.end()
            return;
        }
        if(result.affectedRows===0) return res.status(404).send("Student not found")
    res.status(200).json('student updated successfully')
    
    })
}
const deleteStudentWithId = (req, res) => {
    const { id } = req.params
    const deleteQuery = `DELETE FROM students WHERE id =?`
    db.execute(deleteQuery, [id], (err, result) => {
        if (err) {
            console.log(err.message)
         res.status(500).send("Error when get student with id",err.message)
            db.end()
            return;
        }
        if(result.affectedRows===0) return res.status(404).send("Student not exits")
    res.status(200).json('student deleted')
    })

}
module.exports = {postStudentData,getAllStudentData,getStudentWithId,deleteStudentWithId,updateStudentWithId}