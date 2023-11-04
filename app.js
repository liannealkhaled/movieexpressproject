const express = require("express");
const connectDB = require("./database");
const { route } = require("./api/movie/movie.routes");
const router = require("./api/movie/movie.routes");
const app = express();
// const { errorHandler } = require("./middleware/errorHandler");
// const { notFound } = require("./middleware/notFound");

require("dotenv").config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello application");
});

app.use("api/movies", router);
// app.use(errorHandler);
// app.use(notFound);

connectDB();

app.listen(8000, () => {
  console.log("App is running on port 8000");
});
