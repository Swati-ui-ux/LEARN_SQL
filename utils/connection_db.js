// const mysql = require('mysql2');
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "root123", {
    host: "localhost",
    dialect: "mysql",

})

    ; (async () => {         
    try {             
        await sequelize.authenticate();
        console.log("DB is connected");        
    } catch (error) {             
        console.error("Error when connecting to DB:", error);        
    }     
})();












































// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root123",
//     database:"testdb"
// })

// connection.connect((err) => {
//     if(err){
//         console.log("Error connecting to database", err);
//         return;
//     }
//     console.log("Connected to database");
    
    
//    const students = `create table students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(25), email VARCHAR(25) ,age INT)`
// connection.execute(students, (err) => {
//     if (err) {
//         console.log("Error when student table create",err.message)
//         connection.end()
//         return;
//     }
//    console.log('table created')
// })    
// })



module.exports = sequelize;