var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/kamal", function (req, res, next) {
  res.send("Welcome Kamal Singh to visit this website");
});
router.get("/abhi", function (req, res, next) {
  res.send("Welcome abhishek gaur to visit this website");
});
router.get("/nilu", function (req, res, next) {
  res.send("Welcome nilesh kumar to visit this website");
});
router.get("/:username", function (req, res, next) {
  res.send("Welcome " + req.params.username + " to visit this website");
});

module.exports = router;
