// Set up MySQL connection.
var mysql = require("mysql");
var connection;


if (process.env.JAWSDB_URL) {
  connection = my.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'ctgplw90pifdso61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'zavl113lxtibt7ea',
    password: 'izjosymcyw2nu4p0',
    database: 'oa7uit682bo6ifdj'
  });
};


// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;


