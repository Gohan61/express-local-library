const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/cool", function (req, res, next) {
  res.send("You're so cool");
});

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
