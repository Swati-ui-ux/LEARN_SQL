const express = require('express');
const app = express();
const port = 3000
const userRouter = require("./router/userRouter")
const busRouter = require("./router/busRouter")
const studentRouter = require("./router/studentRoute")
const db = require("./utils/connection_db")

app.use(express.json())








// app.use("/users",userRouter)


app.use("/buses",busRouter)
app.use("/students",studentRouter)

// model 
const studentModel = require("./model/students")





db.sync().then(() => {
app.listen(port, () => {
console.log("Server is running")
})
}).catch(() => {
console.log("Error",err)
})


// app.get("/", (req, res) => {
// res.send("hello world")
// })