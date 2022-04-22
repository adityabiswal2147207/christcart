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
    con.end();
});