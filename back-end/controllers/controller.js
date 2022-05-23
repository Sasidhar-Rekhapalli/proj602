const dbObject = require('../db/connect');

getAllStudents = async(req, res) =>{
    dbObject.getConnection((err, connection) =>{
        connection.query('SELECT * FROM student', (err, rows)=>{
            connection.release();
            if(err){
                return res.status(400).json({success: false, error: err});
            }
            return res.status(200).json({success: true, data: rows});
        });
    });
}

getStudentById = async(req, res) =>{
    var studentId = req.params.id;
    var sql = "SELECT * FROM student WHERE student_id LIEK ?";
    dbObject.getConnection((err, connection) =>{
        connection.query(sql, studentId, (err, rows)=>{
            connection.release();
            if(err){
                return res.status(400).json({success: false, error: err});
            }
            return res.status(200).json({success: true, data: rows});
        });
    });
}

createStudent = async(req, res) => {
    var sql = "INSERT INTO student (prospective, std_id, first_name, middle_name, last_name, gender, birthdate, email, country, academic_period, campus, program, degree, year, graudate_ind, enroll) VALUES ?";
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
            req.body.enroll
        ]
    ];
    dbObject.getConnection((err, connection) =>{        
        connection.query(sql, [values], (err, rows) =>{
            connection.release();
            if(err){
                return res.status(400).json({success:false, error: err});
            }
            return res.status(200).json({message: "Student Created" });
        })
    });
}

updateStudent = async(req, res) => {
    var studentId = req.params.id;
    var sql = "UPDATE student SET prospective = ?, std_id = ?, first_name = ?, middle_name = ?, last_name = ?, gender = ?, birthdate = ?, email = ?, country = ?, academic_period = ?, campus = ?, program = ?, degree = ?, year = ?, graudate_ind = ?, enroll = ? WHERE student_id = " + studentId;
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
            req.body.enroll
    ];
    dbObject.getConnection((err, connection) =>{
        connection.query(sql, values, (err, rows) =>{
            connection.release();
            if(err){
                return res.status(400).json({success:false, error: err});
            }
            return res.status(200).json({message: "Student Updated" });
        })
    });
}

deleteStudent = async(req, res) => {
    var studentId = req.params.id;
    var sql = "DELETE FROM student WHERE student_id = ?";
    dbObject.getConnection((err, connection) =>{
        connection.query(sql, studentId, (err, rows) =>{
            connection.release();
            if(err){
                return res.status(400).json({success:false, error: err});
            }
            return res.status(200).json({message: "Student Deleted" });
        })
    });
}

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}