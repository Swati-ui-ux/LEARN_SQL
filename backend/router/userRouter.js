const express = require('express');
const { sendData, editUserData, deleteUserDataWithId, showUserData, getUserWithId, showUserBookingDetail, loginUser } = require('../controllers/userController')
const postBookingData = require('../controllers/bookingController')
const router = express.Router();

router.get("/",showUserData)
router.post("/signup", sendData)
router.post("/login",loginUser)

router.put('/edit/:id',editUserData)
router.delete("/delete/:id",
    deleteUserDataWithId)
router.get("/:id", getUserWithId)
router.post("/:id/booking",postBookingData)
router.get("/:id/booking",showUserBookingDetail)
module.exports = router