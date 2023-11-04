const express = require("express");
const { CreateReview } = require("./review.controllers");
const reviewrouter = express.Router();

reviewrouter.post("/onereview", CreateReview);
reviewrouter.get("/", GetAllReviews);

module.exports = reviewrouter;
