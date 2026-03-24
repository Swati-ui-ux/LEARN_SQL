const express = require("express")
const { postBusData, getBusData } = require("../controllers/busController")

const router = express.Router()

router.post("/add",postBusData)
router.get("/",getBusData)
module.exports = router