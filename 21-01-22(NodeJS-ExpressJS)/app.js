const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

const mailrouter = require("./routes/mail");

app.use("/", mailrouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
