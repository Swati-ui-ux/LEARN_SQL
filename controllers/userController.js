

// const express = require('express');
const db = require("../utils/connection_db")    
let sendData = (req, res) => {
    console.log(req.body)
    const { email, name } = req.body;
    const insertQuery = ` INSERT INTO Users (name, email) VALUES ('${name}', '${email}')`
    db.execute(insertQuery,[email,name] ,(err) => {
    if (err) {
        console.log("Error when insert data", err.message)
        res.status(500).send("Error when insert data",err.message)
        db.end()
        return;
        }
        console.log("post data in user table")
        res.status(201).send(`Data inserted successfully with name: ${name} and email: ${email}`)
    })
    

}

const editUserData = (req, res) => {
    const { id } = req.params
    
    const { name } = req.body
    const editUserNameQuery = "UPDATE users set name = ? WHERE id = ? "
    db.execute(editUserNameQuery, [name, id], (err,result) => {
        if (err) {
            console.log(err.message)
            res.status(500).send("Error when update user data", err.message)
            db.end()
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send(`User with id ${id} not found`)
            return;
        }
        
res.status(200).send("edit user data successfully")
    
    })
}
const deleteUserDataWithId = (req, res) => {
    const { id } = req.params
    const deleteQuery = `DELETE FROM users WHERE id =? `
    db.execute(deleteQuery, [id], (err,result) => {
        if (err) {
            console.log("Error when delete", err.message)
            res.status(500).send("user not deleted and not exist")
            db.end()
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send("user not found")
            return
        }
        res.status(200).send("data deleted successfully");
        
    })
}
const showUserData = (req, res) => {
    const showQuery = `SELECT * FROM users`
    db.execute(showQuery, (err,result) => {
        if (err) {
            console.log("Error when show all data", err.message)
            res.send(500).send("Error when show user data",err.message)
            db.end()
            return
        }
    console.log("Data",result)
res.status(200).send(`Names: ${result[0].name} ,email : ${result[0].email}`)
    })
}
module.exports={sendData,editUserData,deleteUserDataWithId,showUserData}