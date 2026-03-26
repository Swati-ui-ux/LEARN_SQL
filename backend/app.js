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
const { authMiddleware, getMe } = require('./middleware/authmiddleware')
const postBookingData = require('./controllers/bookingController')

app.use(cors())
app.use(express.json())


app.use("/users",userRouter)
app.use("/buses",busRouter)
app.use("/students",studentRouter)
app.use('/courses', courseRoutes)

// auth router
app.get("/me", authMiddleware, getMe);
app.post("/book",authMiddleware,postBookingData)
// app.use("/booking",bookingRoute)

require("./models")


db.sync({alter:true}).then(() => {
app.listen(port, () => {
console.log("Server is running",port)
})
    console.log("db connected")
}).catch((err) => {
console.log("Error",err.message)
})


