const mysql = require('mysql');

const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: '130284escom',
    database: 'isms'
});

pool.getConnection((err, connection) => {
    if(err) throw err;
    console.log('MySQL Database connection successful');
});

module.exports = pool;