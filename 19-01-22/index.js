const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.get("/", (req, res) => {
  res.send("hello wolrd");
});
app.listen(process.env.PORT || 3000, () => {
  console.log("Port Start from 3000");
});
