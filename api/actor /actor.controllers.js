const Actor = require("../../model/Actor");

exports.CreateActor = async (req, res, next) => {
  try {
    const actor = await Actor.create(req.body);
    res.status(201).json(actor);
  } catch (error) {
    next(error);
  }
};

exports.GetAllActors = async (req, res, next) => {
  try {
    const actors = await Actor.find();
    // /// .populate({  path: "movies" , select: "title"})
  } catch (error) {
    next(error);
  }
};
