const express = require("express");
const connectDB = require("./database");
const { route } = require("./api/movie/movie.routes");
const moviesrouter = require("./api/movie/movie.routes");
const actorrouter = require("./api/actor /actor.routes");
const app = express();
const { errorHandler } = require("./middleware/errorHandler");
const { notFound } = require("./middleware/notFound");
const reviewrouter = require("./api/review/review.routes");
const userrouter = require("./api/user/user.routes");
const passport = require("passport");
const { localStrategy } = require("./middleware/passport");

require("dotenv").config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello application");
});

app.use("/api/movies", moviesrouter);
app.use("/api/actors", actorrouter);
app.use("/api/reviews", reviewrouter);
app.use("/api/users", userrouter);

app.use(errorHandler);
app.use(notFound);

app.use(passport.initialize());
// passport.use(localStrategy);

connectDB();

app.listen(8000, () => {
  console.log("App is running on port 8000");
});
