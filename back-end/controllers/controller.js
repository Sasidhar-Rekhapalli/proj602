//////////////////////////////////////               CONTROLLER.JS                //////////////////////////////////////
/**
 *
 * @file controller.js
 * @copyright ISMS(International Student Management System)
 * @version 1.0.0
 * @author cyberbot team, software developer program
 * @release spring2022
 * @owner Saskatchewan Polytechnic, Saskatoon Campus
 *
 */

//////////////////////////////////////                  SUMMARY                  //////////////////////////////////////
/**
 * @description All routes are on this page and for connection to the database is necessary to require connect.js
 *              Database in this application is Relational Database and use MySQL.
 * @returns for each route we get connection associate with the specific query to return proper result that is expecting for
 *          the route
 * @throws  for each route if the route could not retrieve data from table or connection has problem thow error
 *          with 400(or other 400~499 error) status for bad request response indicates server could not process
 *          the request regard to client error
 * @throws  if the connection is established and the route is running, this status is 200(or other request succeeded code
 *          between 200 to 299)
 * @callback each route has callback function attach to database object variable, that create in connect.js located in db folder
 *
 * @param getAllStudents   this route  GET all student's information                 // Restful, CRUD -> Read
 * @param getStudentById   this route  GET one student's information                 // Restful, CRUD -> Read
 * @param createStudent    this route  POST a student's information                  // Restful, CRUD -> Create
 * @param updateStudent    this route  update a student's information                // Restful, CRUD -> Update
 * @param deleteStudent    this route  delete a student from table                   // Restful, CRUD -> Delete
 * @param  getAllUsers     this route  GET all user's information from database      // Restful, CRUD -> Read
 * @param getUserById      this route  GET one user's information from user table    // Restful, CRUD -> Read
 * @param  createUser      this route  Create a new user and POST it in database     // Restful, CRUD -> Create
 * @param updateUser       this route  update a user's information from table        // Restful, CRUD -> Update
 *  * @param deleteUser    this route  delete a user from table                      // Restful, CRUD -> Delete
 * @param resetPassword    this route  for reset password andupdate user information // Restful, CRUD -> Update
 */

//////////////////////////////////////               SETUPS                //////////////////////////////////////

//#region for  IMPORT
/**  attach the database setting in this file by using require
 *   @notice watch to address, if change path, must modify in the require part*/
const dbObject = require("../db/connect");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../db/models/user");
//#endregion

//////////////////////////////////////              STUDENTS               //////////////////////////////////////

//#region for  GET ALL STUDENTS
/**
 * @module    get all students from the database and show them in a JSON file. In this module, use Read in CRUD operation also
 *            use Get method
 * @callback  anonymous callback function gets the query to return all students filed in the database, the result of the query:
 *            - if failed go to the first part(error), throws with 400 and JSON object return unsuccessful and error.
 *            - if the result of the query is successful, return status 200, which means the process is succesful and returns
 *                data store in the json object.
 * @params  prospective,std_id,first_name,middle_name,last_name,gender, birthdate,email, country,academic_period, campus,program,
 *          degree, year, graudate_ind, enroll
 * @throws   tthrows error 400 if it could not show students information
 * @throws   throws status 200 and return students information
 * @returns  send successfull message.
 */
getAllStudents = async (req, res) => {
  dbObject.getConnection((err, connection) => {
    connection.query("SELECT * FROM student", (err, rows) => {
      connection.release();
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, data: rows });
    });
  });
};
//#endregion

//#region for  GET STUDENT BY ID
/**
 * @module    same as GET ALL STUDENTS, but this module return specific student by student_id. when process is successful and
 *            student by specific id is in the database return the student's information and if query does not return anything
 *            throw an error to user
 *            In this module, use Read in CRUD operation also use Get method
 * @callback  in the first part of the module, save student id that looking for and save it in local studentId varibale. Then
 *            save qurey for return all fileds of the specific student.
 *            anonymous callback function gets the query, studentID and revoke other nested callback function to return result
 *            of searching specific student:
 *            - if result is failed, throws with 400 and JSON object return unsuccessful and error.
 *            - if the result of the query is successful, return status 200, which means the process is succesful and returns
 *              students inormation in JSON object to show user.
 * @params  prospective,std_id,first_name,middle_name,last_name,gender, birthdate,email, country,academic_period, campus,program,
 *          degree, year, graudate_ind, enroll
 * @throws   tthrows error 400 if it could not show the student information
 * @throws   throws status 200 and return the student information
 * @returns  send successfull message
 */
getStudentById = async (req, res) => {
  var studentId = req.params.id;
  console.log(studentId);
  var sql = "SELECT * FROM student WHERE std_id = ?";
  dbObject.getConnection((err, connection) => {
    connection.query(sql, studentId, (err, rows) => {
      connection.release();
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, data: rows });
    });
  });
};
//#endregion

//#region for   CREATE A NEW STUDENT
/**
  * @module    get student's information and put into student table and create a new student with POST method.
  *            in the first part save sql query for insert and save values get from user and save in same order in array variable named values
  * @callback  first anonymous callback function after checking connection invoke query and in second function check query and values saved in array
  *            same as other part response proper output with JSON object and messages:
  *            - if error happend, throws with 400 means unsuccessful result
  *            - if successful, return status 200 and return that student information in JSON object 
  * @params  prospective,std_id,first_name,middle_name,last_name,gender, birthdate,email, country,academic_period, campus,program, degree, year, 
             graudate_ind, enroll
  * @throws   throws error 400 if it could not add information to user
  * @returns  send successfull message to user
  */
createStudent = async (req, res) => {
  var sql =
    "INSERT INTO student (prospective, std_id, first_name, middle_name, last_name, gender, birthdate, email, country, academic_period, campus, program, degree, year, graudate_ind, enroll) VALUES ?";
  var values = [
    [
      req.body.prospective,
      req.body.std_id,
      req.body.first_name,
      req.body.middle_name,
      req.body.last_name,
      req.body.gender,
      req.body.birthdate,
      req.body.email,
      req.body.country,
      req.body.academic_period,
      req.body.campus,
      req.body.program,
      req.body.degree,
      req.body.year,
      req.body.graudate_ind,
      req.body.enroll,
    ],
  ];
  dbObject.getConnection((err, connection) => {
    connection.query(sql, [values], (err, rows) => {
      connection.release();
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ message: "Student Created" });
    });
  });
};
//#endregion

//#region for   ADD A  STUDENT
/**
 * @module    Add student's information and put into student table.
 *            in the first part save sql query for insert and save values get from user and save in same order in array variable named values
 * @callback  first anonymous callback function after checking connection invoke query and in second function check query and values saved in array
 *            same as other part response proper output with JSON object and messages:
 *            - if error happend, throws with 400 means unsuccessful result
 *            - if successful, return status 200 and return that student information in JSON object 
 * @params  prospective,std_id,first_name,middle_name,last_name,gender, birthdate,email, country,academic_period, campus,program, degree, year, 
            graudate_ind, enroll
 * @throws   throws error 400 if it could not add information to user
 * @returns  send successfull message to user
 */
addStudent = async (req, res) => {
  var sql =
    "INSERT INTO student (prospective, std_id, first_name, middle_name, last_name, gender, birthdate, email, country, academic_period, campus, program, degree, year, graudate_ind, enroll) VALUES ?";
  var values = [
    [
      req.body.prospective,
      req.body.std_id,
      req.body.first_name,
      req.body.middle_name,
      req.body.last_name,
      req.body.gender,
      req.body.birthdate,
      req.body.email,
      req.body.country,
      req.body.academic_period,
      req.body.campus,
      req.body.program,
      req.body.degree,
      req.body.year,
      req.body.graudate_ind,
      req.body.enroll,
    ],
  ];
  dbObject.getConnection((err, connection) => {
    connection.query(sql, [values], (err, rows) => {
      connection.release();
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ message: "Student Added" });
    });
  });
};
//#endregion

//#region for   UPDATE STUDENT
/**
  * @module    for changing and other data manipulation first retrive student's information by student_id and update data. Then put into student table
  *            and replace with old information. This module use PUT method.
  *            same as get student by id store student id in local variable, save query in sql and values as give from students in values array
  * @callback  like other student's modules first anonymous callback function after checking connection, query and  check query in the next steps
  *            same as other part response proper output with JSON object and messages:
  *            - if error happend, status 400 otehrwise status 200 and return student information in JSON object 
  * @params  prospective,std_id,first_name,middle_name,last_name,gender, birthdate,email, country,academic_period, campus,program, degree, year, 
             graudate_ind, enroll
  * @throws   throws error 400 if it could not add information to user
  * @returns  send successfull message to user
  */
updateStudent = async (req, res) => {
  var studentId = req.params.id;
  var sql =
    "UPDATE student SET prospective = ?, std_id = ?, first_name = ?, middle_name = ?, last_name = ?, gender = ?, birthdate = ?," +
    "email = ?, country = ?, academic_period = ?, campus = ?, program = ?, degree = ?, year = ?, graudate_ind = ?, enroll = ? " +
    "WHERE student_id = " +
    studentId;
  var values = [
    req.body.prospective,
    req.body.std_id,
    req.body.first_name,
    req.body.middle_name,
    req.body.last_name,
    req.body.gender,
    req.body.birthdate,
    req.body.email,
    req.body.country,
    req.body.academic_period,
    req.body.campus,
    req.body.program,
    req.body.degree,
    req.body.year,
    req.body.graudate_ind,
    req.body.enroll,
  ];
  dbObject.getConnection((err, connection) => {
    connection.query(sql, values, (err, rows) => {
      connection.release();
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ message: "Student Updated" });
    });
  });
};
//#endregion

//#region for   DELETE STUDENT
/**
  * @module    Delete student is the last part of CRUD operation and for this module first get student by id and run the query for remove all infoemation 
  *            of that student
  * @callback  two anonymous callback functions are responsible to return proper result and if error happened or process is successful return status 400
  *            or 200 in order for error or success
  * @params  prospective,std_id,first_name,middle_name,last_name,gender, birthdate,email, country,academic_period, campus,program, degree, year, 
             graudate_ind, enroll
  * @throws   throws error 400 if it could not add information to user
  * @returns  send successfull message to user
 */

deleteStudent = async (req, res) => {
  var studentId = req.params.id;
  var sql = "DELETE FROM student WHERE student_id = ?";
  dbObject.getConnection((err, connection) => {
    connection.query(sql, studentId, (err, rows) => {
      connection.release();
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ message: "Student Deleted" });
    });
  });
};
//#endregion

//////////////////////////////////////                USERS               //////////////////////////////////////

//#region for    GET ALL USERS
/**
 * @module    get all users from the database and show them in a JSON file. In this module, use Read in CRUD operation also
 *            use Get method
 * @callback  anonymous callback function gets the query to return all users filed in the database, the result of the query
 *            if failed first part(error), throws with 400 and JSON object return unsuccessful and error.
 *            if the result of the query is the triumphant return status 200, which means the process is succesful and returns
 *            data store in the json object.
 * @params  user_id, first_name, last_name, email, tel, user_name,password
 * @throws   tthrows error 400 if it could not show students information
 * @throws   throws status 200 and return students information
 * @returns  send successfull message
 */
getAllUsers = async (req, res) => {
  dbObject.getConnection((err, connection) => {
    connection.query("SELECT * FROM user", (err, rows) => {
      connection.release();
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, data: rows });
    });
  });
};

//#endregion

//#region for  GET USER BY ID
/**
 * @module    same as GET ALL USERS, but this module return specific user by user_id. when process is successful and
 *            user by specific id is in the database return the user's information and if query does not return anything
 *            throw an error to user
 *            In this module, use Read in CRUD operation also use Get method
 * @callback  in the first part of the module, save user id that looking for and save it in local userId varibale. Then
 *            save qurey for return all fileds of the specific user.
 *            anonymous callback function gets the query, userID and revoke other nested callback function to return result
 *            of searching specific user:
 *            - if result is failed, throws with 400 and JSON object return unsuccessful and error.
 *            - if the result of the query is successful, return status 200, which means the process is succesful and returns
 *              users inormation in JSON object to show user.
 * @params  user_id, first_name, last_name, email, tel, user_name,password
 * @throws   tthrows error 400 if it could not show the user information
 * @throws   throws status 200 and return the user information
 * @returns  send successfull message
 */
getUserById = async (req, res) => {
  var studentId = req.params.id;
  var sql = "SELECT * FROM user WHERE user_id = ?";
  dbObject.getConnection((err, connection) => {
    connection.query(sql, studentId, (err, rows) => {
      connection.release();
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, data: rows });
    });
  });
};

//#endregion

//#region for    GET  USERS VIEW
/**
 * @module    get  users' name , type and other information and report it in user's page
 *            use Get method
 *            in this route make functionality for front end in user page , show all users' information
 * @callback  anonymous callback function gets the query to return all users filed in the database, the result of the query
 *            if failed first part(error), throws with 400 and JSON object return unsuccessful and error.
 *            if the result of the query is the triumphant return status 200, which means the process is succesful and returns
 *            data store in the json object.
 * @params  first_name, last_name,user_name,risia , rcic ,  no_certification
 * @throws   tthrows error 400 if it could not show students information
 * @throws   throws status 200 and return students information
 * @returns  send successfull message
 */
getUsersView = async (req, res) => {
  dbObject.getConnection((err, connection) => {
    connection.query(
      "SELECT CONCAT (last_name , ' , ' ,first_name) As name, user_name, risia , rcic ,  no_certification  FROM user JOIN user_role ON(user_role.user_id=user.user_id) JOIN role ON(user_role.role_id=role.role_id)",
      (err, rows) => {
        connection.release();
        if (err) {
          return res.status(400).json({ success: false, error: err });
        }
        return res.status(200).json({ success: true, data: rows });
      }
    );
  });
};
//#endregion

//#region for   CREATE A NEW USER
/**
 * @module    ceaate a new user and get user's information and send to user table
 *            save query for insert information in a variable and get data from customer save it in an array, then check the connection and throw proper information
 * @params  user_id, first_name, last_name, email,tel ,user_name, password
 * @throws   throws error 400 if it could not add information to user
 * @returns  send successfull message to user
 */
createNewUser = async (req, res) => {
  try {
    // I added not for isAuthenticated
    const userData = req.body.vals; // grab onto the new user array of values
    bcrypt.hash(userData[5], saltRounds, (err, hash) => {
      if (err) {
        console.error(err);
      }
      userData[5] = hash; // replace plain text password with hash
      const vals = [
        userData[0],
        userData[1],
        userData[2],
        userData[3],
        userData[4],
        userData[5],
      ];
      const queryString = `INSERT INTO user (first_name ,last_name ,email ,tel  ,user_name  , password ) VALUES (?,?,?,?,?,?)`;
      dbObject.execute(queryString, vals, (err, result) => {
        if (err) throw err;
        else {
          return res.status(200).json({ success: true });
        }
      });
    });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
};

//#endregion

//#region for   ADD A USER
/**
 * @module    Add a new user , send to user table
 *            save query for insert information in a variable and get data from customer save it in an array, then check the connection and throw proper information
 * @params  user_id, first_name, last_name, email,tel ,user_name, password
 * @throws   throws error 400 if it could not add information to user
 * @returns  send successfull message to user
 */
addUser = async (req, res) => {
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var email = req.body.email;
  var tel = req.body.tel;
  var user_name = req.body.user_name;
  var password = req.body.password;
  var role = req.body.role;

  var sql = `INSERT INTO user (first_name,last_name ,email ,tel ,user_name, password,role) VALUES ('${first_name}','${last_name}','${email}','${tel}','${user_name}', '${password}', '${role}')`;

  dbObject.getConnection((err, connection) => {
    connection.query(sql, (err, rows) => {
      connection.release();
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ message: "User Added" });
    });
  });
};
//#endregion

//#region for   UPDATE USER
/**
 * @module    for changing and other data manipulation first retrieve user's information by user_id and update data. Then put into user table
 *            and replace with old information. This module use PUT method.
 *            same as get user by id store user id in local variable, save query in sql and values as give from users in values array
 * @callback  like other user's modules first anonymous callback function after checking connection, query and  check query in the next steps
 *            same as other part response proper output with JSON object and messages:
 *            - if error happened, status 400 otherwise status 200 and return user information in JSON object
 * @params  user_id, first_name, last_name, email, tel, user_name,password
 * @throws   throws error 400 if it could not add information to user
 * @returns  send successful message to user
 */
updateUser = async (req, res) => {
  var userId = req.params.id;
  var sql =
    "UPDATE user SET user_id = ?, first_name = ?, last_name = ?, role = ?, email = ?, tel = ?, user_name = ?, password = ?  WHERE user_id = " +
    userId;
  var values = [
    req.body.user_id,
    req.body.first_name,
    req.body.last_name,
    req.body.role,
    req.body.email,
    req.body.tel,
    req.body.user_name,
    req.body.password
  ];
  dbObject.getConnection((err, connection) => {
    connection.query(sql, values, (err, rows) => {
      connection.release();
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ message: "User Updated" });
    });
  });
};
//#endregion

//#region for   DELETE USER
/**
 * @module    Delete user is the last part of CRUD operation and for this module first get user by id and run the query for remove all information
 *            of that user
 * @callback  two anonymous callback functions are responsible to return proper result and if error happened or process is successful return status 400
 *            or 200 in order for error or success
 * @params  user_id, first_name, last_name, email, tel, user_name,password
 * @throws   throws error 400 if it could not add information to user
 * @returns  send successful message to user
 */
deleteUser = async (req, res) => {
  var userId = req.params.id;
  var sql = "DELETE FROM user WHERE user_id = ?";
  dbObject.getConnection((err, connection) => {
    connection.query(sql, userId, (err, rows) => {
      connection.release();
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ message: "User Deleted" });
    });
  });
};
//#endregion

//#region for   RESET PASSWORD
/**
 * @module    Reset Password provides reset password for user by getting user_id and reset password
 * @callback  two anonymous callback functions like other routes responsible to return proper result or error
 * @params  user_id, user_name,password
 * @throws   throws error 400 if it could not add information to user
 * @returns  send successful message to user
 */
resetPassword = async (req, res) => {
  var userName = req.params.id;
  var sql =
    "UPDATE user SET  password = ? WHERE user_name = '" + userName + "'";
  var values = [req.body.password];
  dbObject.getConnection((err, connection) => {
    connection.query(sql, values, (err, rows) => {
      connection.release();
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ message: "Password Updated" });
    });
  });
};
//#endregion

//#region for   LOGIN
/**
 * @module    Login page for users
 * @callback  two anonymous callback functions like other routes responsible to return proper result or error
 * @params   user_name,password
 * @throws   throws error 400 if it could not add information to user
 * @returns  send successful message to user
 */
login = async (req, res, done) => {
  try {
    dbObject.query(
      "SELECT * from user where user_name=?",
      req.body.vals[0],
      function (error, rows) {
        if (error) {
          console.log("user doesn't exist");
        } else {
          let user = rows[0];
          if (
            user.password.length !== "null" ||
            user.password.length !== "undefined"
          ) {
            let match = bcrypt.compareSync(req.body.vals[1], user.password);

            if (match) {
              console.log("password matched");
              res.status(200).json({ done: req.body.vals[0] });
            } else {
              console.log("Wrong password");
              return res.status(400).json({ message: "Wrong password" });
            }
          }
        }
      }
    );
  } catch (err) { }
  return res;
};
//#endregion

//#region for  Get Conversation
/**
 * @module    get information for each student and get conversation result for specific student
 * @params  category,datecreated,createdby,lastupdatedby
 * @throws   tthrows error 400 if it could not show the user information
 * @throws   throws status 200 and return the user information
 * @returns  send successfull message
 */
getConversation = async (req, res) => {
  var studentId = req.params.id;
  var sql =
    "SELECT category,datecreated,createdby,lastupdatedby FROM conversation JOIN student USING(student_id) WHERE student_id= ?";
  dbObject.getConnection((err, connection) => {
    connection.query(sql, studentId, (err, rows) => {
      connection.release();
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, data: rows });
    });
  });
};

//#endregion

//////////////////////////////////////              MODULE  EXPORTS               //////////////////////////////////////
/**
 * in the exports section we export all moudules as created and prepare them to use it in other pages or modules
 * @params   all routes
 * @exports  all routes
 */
module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  addStudent,
  updateStudent,
  deleteStudent,

  getAllUsers,
  getUserById,
  getUsersView,
  createNewUser,
  addUser,
  updateUser,
  deleteUser,
  resetPassword,
  login,
  getConversation,
};