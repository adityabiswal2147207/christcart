const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "testdb-instance-1.czb2nriukrqp.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "adminadmin"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    console.log("Initiating connection");

    con.query('Use cbps;');
    con.query('Create table users(firstname varchar(30),lastname varchar(30), mobile_no int(10), password varchar(15), username varchar(20),email_id varchar(30),register_no int(7))');
    //con.query('Drop table users;');
    
    con.query('SHOW TABLES;', function(error, result, fields) {console.log(result);});
    con.end();
});
