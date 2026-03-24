const express = require('express');
const app = express();
const port = 3000
const userRouter = require("./router/userRouter")
const busRouter = require("./router/busRouter")
const studentRouter = require("./router/studentRoute")
const db = require("./utils/connection_db")
const cors = require("cors")
app.use(cors())
app.use(express.json())








app.use("/users",userRouter)


app.use("/buses",busRouter)
app.use("/students",studentRouter)

// model 
const studentModel = require("./model/students")

const userModel = require("./model/users")

const busesModel = require("./model/buses")

db.sync().then(() => {
app.listen(port, () => {
console.log("Server is running")
})
}).catch((err) => {
console.log("Error",err.message)
})


