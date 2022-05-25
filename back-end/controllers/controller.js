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
/////////////         CREATE STUDENT         /////////////
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


/////////////         CREATE USER         /////////////
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
          return res.status(400).json({ success: false, error: err });
        }
        return res.status(200).json({ message: "User Created" });
      });
    });
  }; 
  
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
      "UPDATE student SET first_name = ?, last_name = ?, email = ?, tel = ?, user_name = ?, password = ?" +
      userId;
    var values = [
      req.body.user_id,
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      req.body.tel,
      req.body.user_name,
      req.body.password,
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
};
