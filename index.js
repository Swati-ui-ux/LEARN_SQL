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
    const Users = `create table Users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(25), email VARCHAR(25))`;
    const Buses = `create table Buses (id INT AUTO_INCREMENT PRIMARY KEY, busNumber VARCHAR(20),totalSeats INT,availableSeats VARCHAR(20))`;
    const Booking = `create table Booking (id INT AUTO_INCREMENT PRIMARY KEY , seatNumber INT) `
    
    const payment = `create table Payment (id INT AUTO_INCREMENT PRIMARY KEY,amountPaid VARCHAR(25),paymentStatus VARCHAR(25))`
    // connection.execute(payment, (err) => {
    //     if (err) {
    //         console.log("Error when creating payment table")
    //         connection.end()
    //         return
    //     }
    //     console.log("Payment table created successfully")
    
    // })
    
    
})









    // connection.execute(Buses, (err) => {
    
    //     if (err) {
    //         console.log("Error when bus created", err)
    //         connection.end()
    //         return
    //     }
    //     console.log("buses created successfully")
    
    // })
    // connection.execute(creationQuery, (err) => {
    //     if(err){
    //         console.log("Error creating table", err);
    //         connection.end();
    //         return;
    //     }
    //     console.log("Table created successfully");
    // })


    // connection.execute(Users, (err) => {
    //     if (err) {
    //     console.log("Error from connection",err)
    //     }
    //     connection.end()
    //     console.log("Data created")
    // })



app.get("/", (req, res) => {
res.send("hello world")
})
app.listen(port, () => {
console.log("Server is runing")
})