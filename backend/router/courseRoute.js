const express = require("express")
const router = express.Router()

const courseController = require("../controllers/courseController")

router.post("/addCourse",courseController.addCourses)
router.get("/addStudentCourse",courseController.addStudentToCourses)

module.exports = router