const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is about page");
});

module.exports = router;
