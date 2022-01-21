const express = require("express");
const mysql = require("mysql");
let dbconn = {
  host: "localhost",
  user: "root",
  password: "",
  database: "office",
};
const conn = mysql.createConnection(dbconn);
conn.connect((err) => {
  if (err) throw err;
  console.log("Connection Created");
  conn.query(
    "CREATE TABLE IF NOT EXISTS feedbackData(id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,fullname VARCHAR(255) NOT NULL,email VARCHAR(255) NOT NULL,suggestion VARCHAR(255) NOT NULL)",
    (err) => {
      if (err) throw err;
      console.log("Table Created");
    }
  );
});
module.exports = conn;
