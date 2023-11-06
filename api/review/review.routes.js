const express = require("express");
const { CreateReview, GetAllReviews } = require("./review.controllers");
const reviewrouter = express.Router();

reviewrouter.post("/review", CreateReview);
reviewrouter.get("/", GetAllReviews);

module.exports = reviewrouter;
