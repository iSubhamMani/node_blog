const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("blogs/index", { title: "Home" });
});

module.exports = router;
