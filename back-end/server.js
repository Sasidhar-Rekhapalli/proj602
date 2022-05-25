const express = require('express');
const backend = express();
const db = require('./db/connect');
const router = require('./routes/route');

backend.use(express.json());

backend.get('/', function(req, res){
    res.redirect("/isms/main");
});

backend.use('/isms', router);

backend.listen(3000, ()=>{
    console.log('Server is running');
});