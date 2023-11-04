const express = require("express");
const connectDB = require("./database");
const { route } = require("./api/movie/movie.routes");
const moviesrouter = require("./api/movie/movie.routes");
const actorrouter = require("./api/actor /actor.routes");
const app = express();
// const { errorHandler } = require("./middleware/errorHandler");
// const { notFound } = require("./middleware/notFound");

require("dotenv").config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello application");
});

app.use("/api/movies", moviesrouter);
app.use("api/actors", actorrouter);
// app.use(errorHandler);
// app.use(notFound);

connectDB();

app.listen(8000, () => {
  console.log("App is running on port 8000");
});
