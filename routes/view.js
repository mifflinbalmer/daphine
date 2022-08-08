const express = require("express");
const router = express.Router();

const { createView } = require("../api/view");

router.get("/", function (req, res) {
  createView(req, res);
});

module.exports = router;
