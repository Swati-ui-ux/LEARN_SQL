const express = require('express');
const { sendData, editUserData, deleteUserDataWithId, showUserData } = require('../controllers/userController')
const router = express.Router();

router.post("/add",sendData)
router.put('/edit/:id',editUserData)
router.delete("/delete/:id", deleteUserDataWithId)
router.get("/show",showUserData)
module.exports = router