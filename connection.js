const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: 'root',
    // Your password
    password: 'password',
    database: 'employee_DB',
  });



  connection.connect(function(err){
 if(err) throw err

  });


module.exports = connection

