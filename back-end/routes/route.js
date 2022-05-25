const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

/** Route for Create, Update,Read and Delete for STUDENTS 
 * @param getAllStudents  get all student informayion from student table 
 * @param getStudentById  get one student with student id from student table  
 * @param  createStudent  create a new student and put student's information into student table 
 * @param  updateStudent  update one student information 
 * @param  deleteStudent  delete one student's from table */

router.get("/main", controller.getAllStudents);
router.get("/getstuent/:id", controller.getStudentById);
router.post("/newstudent", controller.createStudent);
router.put("/updatestudent/:id", controller.updateStudent);
router.delete("/deletestudent/:id", controller.deleteStudent);

//////////////////////////////////////////////////////////////////////////////////////////////////

/** Route for Create, Update,Read and Delete for USERS 
 * @param  getAllUsers  get all user informayion from user table 
 * @param  getUserById  get one user with user id from user table  
 * @param  createUser  create a new user and put user's information into student table
 * @param  updateUser  update one user and put user's information into student table
 * @param  resetpassword  update a user password */

router.get("/users", controller.getAllUsers);
router.get("/getuser/:id", controller.getUserById);
router.post("/newuser", controller.createUser);
router.put("/updateuser/:id", controller.updateUser);
router.put("/resetpassword/:id", controller.resetPassword);

module.exports = router;
