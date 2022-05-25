/**
 * all routes are in this page and for connection to database is neccessary to require connect.js
 * @param getAllStudents   this route provide GET all student's information //Restful, CRUD-> Read
 * @param  getStudentById  this route provide GET one student's information //Restful, CRUD-> Read
 * @param  createStudent    this route provide POST a student's information //Restful, CRUD-> Create
 * @param updateStudent
 * @param deleteStudent
 * @param  getAllUsers
 * @param getUserById
 * @param  createUser
 * @param updateUser
 * @param resetPassword
 */
const dbObject = require("../db/connect");
/////////////         GET ALL STUDENTs         /////////////
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
/////////////         GET ALL USERS         /////////////
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
/////////////         GET  STUDENT BY ID        /////////////
getStudentById = async (req, res) => {
  var studentId = req.params.id;
  var sql = "SELECT * FROM student WHERE student_id = ?";
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
/////////////         GET  USER BY ID        /////////////
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

//#region  for    ///////     CREATE A NEW STUDENT      ///////     
/**
 * @module    create a new student and get student's information and put into student table,
 *            save query for insert information in a variable and get data from customer save it in an array, then check the connection and throw proper information
 * @params  prospective,std_id,first_name,middle_name,last_name,gender, birthdate,email, country,academic_period, campus,program, degree, year, graudate_ind, enroll
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
        return res
          .status(400)
          .json({ success: false, error: err });
      }
      return res
        .status(200)
        .json({ message: "Student Created" });
    });
  });
};
//#endregion

//#region for    ///////       CREATE A NEW USER       ///////     
/**
 * @module    ceaate a new user and get user's information and send to user table
 *            save query for insert information in a variable and get data from customer save it in an array, then check the connection and throw proper information
 * @params  user_id, first_name, last_name, email,tel ,user_name, password
 * @throws   throws error 400 if it could not add information to user
 * @returns  send successfull message to user
 */
createUser = async (req, res) => {
  var sql =
    "INSERT INTO user (user_id,first_name,last_name ,email ,tel ,user_name, password) VALUES ?";
  var values = [
    [
      req.body.user_id,
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      req.body.tel,
      req.body.user_name,
      req.body.password
    ],
  ];
  dbObject.getConnection((err, connection) => {
    connection.query(sql, [values], (err, rows) => {
      connection.release();
      if (err) {
        return res
          .status(400)
          .json({ success: false, error: err });
      }
      return res
        .status(200)
        .json({ message: "User Created" });
    });
  });
};

//#endregion

/////////////         UPDATE STUDENT         /////////////
updateStudent = async (req, res) => {
  var studentId = req.params.id;
  var sql =
    "UPDATE student SET prospective = ?, std_id = ?, first_name = ?, middle_name = ?, last_name = ?, gender = ?, birthdate = ?, email = ?, country = ?, academic_period = ?, campus = ?, program = ?, degree = ?, year = ?, graudate_ind = ?, enroll = ? WHERE student_id = " +
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

////////////         UPDATE USER         /////////////
updateUser = async (req, res) => {
  var userId = req.params.id;
  var sql =
    "UPDATE user SET first_name = ?, last_name = ?, email = ?, tel = ?, user_name = ?, password = ? WHERE user_id = " + userId;
  var values = [
    req.body.user_id,
    req.body.first_name,
    req.body.last_name,
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



////////////         RESET PASSWORD         /////////////
resetPassword = async (req, res) => {
  var userId = req.params.id;
  var sql =
    "UPDATE user SET user_name = ?, password = ? WHERE user_id = " + userId;
  var values = [
    req.body.user_name,
    req.body.password
  ];
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




/////////////         DELETE STUDENT         /////////////
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

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,

  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  resetPassword
};
