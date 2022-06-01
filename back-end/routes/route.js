//////////////////////////////////////               ROUTE.JS                //////////////////////////////////////
/**
 * 
 * @file route.js
 * @copyright ISMS(International Student Management System)
 * @version 1.0.0
 * @author cyberbot team, software developer program
 * @release spring2022
 * @owner Saskatchewan Polytechnic, Saskatoon Campus
 * 
 */

//////////////////////////////////////                 SUMMARY                  //////////////////////////////////////
/** 
 * @description routes for access sub pages, in this module with express provide different routes for each CRUD operation 
 *              and other process as required
 * */

//////////////////////////////////////              SETUPS                //////////////////////////////////////

//#region for  IMPORT        
/**  after installing express package import it, also assign express.Router to a variable and use it for routes
 * import all routes located in controller.js 
 * @param express  for import express 
 * @param router  for use Router method in express 
 * @param controller for import routes in controller.js 
 * */

const express = require("express");
const router = express.Router();
const controller = require('../controllers/controller');

//#endregion

//////////////////////////////////////             STUDENTS               //////////////////////////////////////
//#region for student's route
/** Route for Create, Update,Read and Delete for STUDENTS 
 * @param getAllStudents  get all student informayion from student table 
 * @param getStudentById  get one student with student id from student table  
 * @param  createStudent  create a new student and put student's information into student table 
 * @param  updateStudent  update one student information 
 * @param  deleteStudent  delete one student's from table */

router.get("/getallstudent", controller.getAllStudents);
router.get("/getstudent/:id", controller.getStudentById);
router.post("/newstudent", controller.createStudent);
router.post("/addstudent", controller.addStudent);
router.put("/updatestudent/:id", controller.updateStudent);
router.delete("/deletestudent/:id", controller.deleteStudent);

//#endregion

//////////////////////////////////////                USERS               //////////////////////////////////////
//#region for user's route
/** Route for Create, Update,Read and Delete for USERS 
 * @param  getAllUsers  get all user informayion from user table 
 * @param  getUserById  get one user with user id from user table  
 * @param  createUser  create a new user and put user's information into student table
 * @param  addUser   add a new user and put user's information into student table
 * @param  updateUser  update one user and put user's information into student table
 * @param  resetpassword  update a user password */

router.get("/user/getuser", controller.getAllUsers);
router.get("/user/getuser/:id", controller.getUserById);
router.get("/user/getUsersView", controller.getUsersView);
router.post("/user/register", controller.createUser);
router.post("/user/addUser", controller.addUser);
router.post("/user/login", controller.login);
router.put("/user/updateuser/:id", controller.updateUser);
router.delete("/deleteuser/:id", controller.deleteUser);
router.put("/resetpassword/:id", controller.resetPassword);

//#endregion

//////////////////////////////////////              MODULE  EXPORTS               //////////////////////////////////////

module.exports = router;