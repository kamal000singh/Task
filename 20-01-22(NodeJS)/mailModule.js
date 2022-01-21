const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: "kamal000singh2017@gmail.com", pass: "kamal000singh" },
});
let mailOptions = {
  from: "kamal000singh2017@gmail.com",
  to: "kamal000rawat@gmail.com",
  subject: "sending NodeJS",
  html: "<h1>The Nodemailer module makes it easy to send emails from your computer</h1>",
};
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent : " + info.response);
  }
});
