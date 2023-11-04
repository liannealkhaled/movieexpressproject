const express = require("express");
const { CreateMovie, GetAllMovies } = require("./movie.controllers");
const moviesrouter = express.Router();

moviesrouter.post("/onebook", CreateMovie);
moviesrouter.get("/", GetAllMovies);

module.exports = moviesrouter;
