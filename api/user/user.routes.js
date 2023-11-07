///// this the user for adding reviews

const express = require("express");
const { createUser, getAllUsers } = require("./user.controller");

const userrouter = express.Router();

userrouter.post(
  "/signup",
  // passport.authenticate("local", { session: false }),
  createUser
);
userrouter.get("/", getAllUsers);

module.exports = userrouter;
