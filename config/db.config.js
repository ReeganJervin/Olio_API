'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'jervin',
    password: 'Reegan@80',
	  port:'3306',
    database: 'olio_group',  
    multipleStatements: true,
    acquireTimeout: Number.POSITIVE_INFINITY
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;
