const express = require("express");
const { createTransaction } = require("../api/request");

const router = express.Router();

router.post("/", function (req, res) {
  createTransaction(req, res);
});

module.exports = router;