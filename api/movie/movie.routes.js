const express = require("express");
const { CreateMovie } = require("./movie.controllers");
const router = express.Router();

router.post("/", CreateMovie);

module.exports = router;
