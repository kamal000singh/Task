const express = require("express");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const aboutRouter = require("./routes/about");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/about", aboutRouter);

module.exports = app;
