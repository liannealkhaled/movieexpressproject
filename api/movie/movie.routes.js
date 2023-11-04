const express = require("express");
const { CreateMovie, GetAllMovies } = require("./movie.controllers");
const router = express.Router();

router.post("/", CreateMovie);
router.get("/", GetAllMovies);
module.exports = router;
