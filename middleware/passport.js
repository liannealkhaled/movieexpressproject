const LocalStrategy = require("passport-local");
const User = require("../model/User");
const bcrypt = require("bcrypt");

const localStrategy = new LocalStrategy(async (username, password, next) => {
  try {
    const user = await User.findOne(username);
    // if (!user) res.status(404).json("user not found");
    // const passwordsMatch = await bcrypt.compare(user.password, password);
    // if (!)
    if (user) {
      const passwordsMatch = await bcrypt.compare(user.password, password);
      if (passwordsMatch) return done(null, user);
      return done(null, false);
    }
    passwordsMatch = false;
    // return { passwordsMatch: false };
    // res.status(404).json("user not found");
  } catch (error) {
    next(error);
  }
});

module.exports = localStrategy;
