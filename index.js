const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000


const connection =mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database:"testdb"
})

connection.connect((err) => {
    if(err){
        console.log("Error connecting to database", err);
        return;
    }
    console.log("Connected to database");
    
    const creationQuery = `create table Students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(25), email VARCHAR(25))`;
    
    connection.execute(creationQuery, (err) => {
    
        if(err){
            console.log("Error creating table", err);
            connection.end();
            return;
        }
        console.log("Table created successfully");
    })
})




app.get("/", (req, res) => {
res.send("hello world")
})
app.listen(port, () => {
console.log("Server is runing")
})