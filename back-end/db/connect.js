const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'192.168.75.129',
    user: 'student',
    password: 'letmein',
    database: 'isms'
});

pool.getConnection((err, connection) => {
    if(err) throw err;
    console.log('MySQL Database connection successful');
   
});

module.exports = pool;