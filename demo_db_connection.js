var mysql = require('mysql');

var con = mysql.createConnection({
      host: "localhost",
      user: "ino",
      password: "ino1212"
});

con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
});
