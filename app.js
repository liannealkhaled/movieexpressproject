const express = require("express");
const connectDB = require("./database");
const app = express();
// const { errorHandler } = require("./middleware/errorHandler");
// const { notFound } = require("./middleware/notFound");

require("dotenv").config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello application");
});

// app.use(errorHandler);
// app.use(notFound);

connectDB();

app.listen(8000, () => {
  console.log("App is running on port 8000");
});
