const Review = require("../../model/Review");

exports.CreateReview = async (req, res, next) => {
  try {
    const review = await Review.create(req.body);
    return res.status(201).json(movie);
  } catch (error) {
    next(error);
  }
};

exports.GetAllReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find();
    return res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};
