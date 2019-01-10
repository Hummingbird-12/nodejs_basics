var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "ino",
    password: "ino1212",
    multipleStatements: true,
    database: "test"
});

// var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
// var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
// var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
// var sql = "INSERT INTO customers (name, address) VALUES ?";
/* var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
]; */
// var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
//var sql = "SELECT * FROM customers";
var sql = "SELECT * FROM customers ORDER BY name";

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function(err, result, fields) {
        if(err) throw err;
        console.log("Result: " + result[0].address);
    });
});
