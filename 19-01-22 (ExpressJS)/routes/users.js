const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res) {
  res.render("index", {
    title: "",
    name: "Welcome Kamal Singh to visit this website",
  });
});
router.get("/abhi", function (req, res) {
  res.render("users", {
    title: "",
    name: "Welcome abhishek gaur to visit this website",
  });
});
router.get("/nilu", function (req, res) {
  res.render("users", {
    title: "",
    name: "Welcome nilesh kumar to visit this website",
  });
});
router.get("/:username", function (req, res) {
  res.render("users", {
    title: "",
    name: "Welcome " + req.params.username + " to visit this website",
  });
});

module.exports = router;
