const express = require("express");
const router = express.Router();
const conn = require("../connection/connection");

router.get("/display", (req, res) => {
  conn.query("SELECT * FROM feedbackData", (err, result, fields) => {
    if (err) throw err;
    res.send(result);
    console.log(result);
  });
});

module.exports = router;
