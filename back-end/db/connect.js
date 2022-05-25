const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: 'Mo123456789',
    database: 'isms'
});

pool.getConnection((err, connection) => {
    if(err) throw err;
    console.log('MySQL Database connection successful');
   
});

module.exports = pool;