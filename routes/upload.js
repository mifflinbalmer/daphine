const express = require("express");
const router = express.Router();

const { createUpload } = require("../api/upload");

router.get("/", function (req, res) {
  createUpload(req, res);
});

module.exports = router;
