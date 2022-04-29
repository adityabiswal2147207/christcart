const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'cucs'
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())


app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
  connection.query('select * from marketplaceinstances', function(err, tables){ 
    console.log(tables);
});
});