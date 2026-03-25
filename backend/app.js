const express = require('express');
const app = express();
const port = 3000
const userRouter = require("./router/userRouter")
const busRouter = require("./router/busRouter")
const studentRouter = require("./router/studentRoute")
const courseRoutes = require("./router/courseRoute")
const bookingRoute = require("./router/bookingRoute")
const db = require("./utils/connection_db")
const cors = require("cors")
app.use(cors())
app.use(express.json())








app.use("/users",userRouter)
app.use("/buses",busRouter)
app.use("/students",studentRouter)
app.use('/courses', courseRoutes)
app.use("/booking",bookingRoute)
// model
// require("./model/identityCard")
// console.log("before")
require("./models")
// require("./models/department")
// console.log("after")


db.sync().then(() => {
app.listen(port, () => {
console.log("Server is running",port)
})
}).catch((err) => {
console.log("Error",err.message)
})


