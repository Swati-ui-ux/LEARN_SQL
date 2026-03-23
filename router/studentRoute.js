const express = require("express")
const { postStudentData, getAllStudentData, getStudentWithId, deleteStudentWithId, updateStudentWithId } = require("../controllers/studentController")

const router = express.Router()

router.post("/add", postStudentData)
router.get("/", getAllStudentData)
router.get("/:id", getStudentWithId)
router.delete("/:id", deleteStudentWithId)
router.put("/:id",updateStudentWithId)
module.exports = router