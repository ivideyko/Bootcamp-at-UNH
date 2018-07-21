const mysql = require("mysql");

const connection = mysql.createConnection({
  // host: 
  
  "mysql://gkqt10anj6nrfnh1:lwhrzvugyy54e7hm@wiad5ra41q8129zn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/atxhjw5zd2yr7s71"

  // port: 3306,
  // user: "root",
  // password: "root",
  // database: "burger_db"
});

connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
