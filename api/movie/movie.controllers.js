const Movie = require("../../model/Movie");

exports.CreateMovie = async (req, res, next) => {
  try {
    const movie = await Movie.create(req.body);
    res.staus(201).json(movie);
  } catch (error) {
    next(error);
  }
};

exports.GetAllMovies = async (req, res, next) => {
  try {
    const movie = await Movie.find();
    res.status(200).json(movie);
  } catch (error) {
    next(error);
  }
};
