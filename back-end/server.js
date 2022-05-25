/**
 * Main page for backend
 * in this page all require are add 
 * Express module for connectivity add
 * database created in db/connect.js and require in the main page 
 * same as databse all routes that create in routes/route.js is add in this page
 * @module  express
 * @function Mainpage
 */
const express = require('express');
const backend = express();

const db = require('./db/connect');
const router = require('./routes/route');

backend.use(express.json());

/**
 * redirect the first page to isms/main and use router to run
 */
backend.get('/', function (req, res) {
    res.redirect("/isms/main");
});

backend.use('/isms', router);

/**
 * use port 3001 to start and listen this port
 * this is an arbitary port and we can use any other ports, if this port conflict with other applicatrion
 * use any port betwween 1024~65535 
 */
backend.listen(3001, () => {
    console.log('Server is running');
});