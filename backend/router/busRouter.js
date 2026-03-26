const express = require("express")
const { postBusData, getBusData, getBusWithId } = require("../controllers/busController")

const router = express.Router()

router.post("/add",postBusData)
router.get("/", getBusData)
router.get("/:id",getBusWithId)
module.exports = router