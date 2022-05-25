const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

//Get all students
router.get("/main", controller.getAllStudents);
router.get("/getstuendid/:id", controller.getStudentById);
router.post("/newstudent", controller.createStudent);
router.put("/updatestudent/:id", controller.updateStudent);
router.delete("/deletestudent/:id", controller.deleteStudent);
router.get("/users", controller.getAllUsers);
router.get("/getUserById/:id", controller.getUserById);
router.post("/newuser", controller.createUser);

module.exports = router;
