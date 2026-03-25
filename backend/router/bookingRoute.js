const express = require("express")

const postBookingData = require("../controllers/bookingController")

const router = express.Router()

router.post("/add",postBookingData)
// router.get("/",getBusData)
module.exports = router