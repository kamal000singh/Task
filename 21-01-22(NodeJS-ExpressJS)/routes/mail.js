const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.userId, pass: process.env.userPwd },
});

router.get("/mail", (req, res) => {
  //   console.log("get request");
  res.render("mail");
});
router.post("/mail", (req, res) => {
  //   console.log(req.body);
  let fname = req.body.fname;
  let email = req.body.email;
  let suggestion = req.body.suggestion;
  let mailOptions = {
    from: "kamal000singh2017@gmail.com",
    to: "kamal000rawat@gmail.com",
    subject: "New Suggestion from user",
    text:
      "User Full Name : " +
      fname +
      "\nUser Email ID : " +
      email +
      "\nUser Suggestion : " +
      suggestion,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log("Sending mail : " + info.response);
    alert("Your mail has been sent");
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
