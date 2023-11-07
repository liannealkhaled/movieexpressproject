const User = require("../../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//// steps: hashpassward, then generate token, then signup

//// generate token
const generateToken = (user) => {
  const payload = {
    username: user.username,
    _id: user._id,
  };
  return jwt.sign(payload, process.env.SECRETE_KEY, {
    expiresIn: process.env.JWT_TOKEN_EXP,
  });
};
//// createuser = sign up

exports.createUser = async (req, res, next) => {
  try {
    //// hashed passward :
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;

    const user = await User.create(req.body);
    const token = generateToken(user);
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
