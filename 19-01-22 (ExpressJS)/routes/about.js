const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "this is about page" });
});

module.exports = router;
