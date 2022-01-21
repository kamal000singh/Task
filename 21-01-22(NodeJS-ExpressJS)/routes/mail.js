const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const connection = require("../connection/connection");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.userId, pass: process.env.userPwd },
});

router.get("/mail", (req, res) => {
  // let sql =
  //   "INSERT INTO feedbackData(fullname,email,suggestion) VALUES('KAMAL','kamal000rawat@gmail.com','helllo world')";
  // connect.query(sql, (err) => {
  //   if (err) throw err;
  //   console.log("Data inserted");
  // });
  //   console.log("get request");
  res.render("mail");
});
router.post("/mail", (req, res) => {
  //   console.log(req.body);
  let fname = req.body.fname;
  let email = req.body.email;
  let suggestion = req.body.suggestion;
  let sql = `INSERT INTO feedbackData(fullname,email,suggestion) VALUES("${fname}","${email}","${suggestion}")`;
  connection.query(sql, (err) => {
    if (err) throw err;
    console.log("Thanks for your suggestion");
  });

  let feedbackMail = {
    from: "kamal000singh2017@gmail.com",
    to: email,
    subject: "Thanks for your feedback",
    text: "Your suggestion is very important for us",
  };
  transporter.sendMail(feedbackMail, (err, info) => {
    if (err) throw err;
    console.log("Sending mail : " + info);
  });
  setTimeout(() => {
    res.redirect("/mail");
  }, 2000);
});

module.exports = router;
