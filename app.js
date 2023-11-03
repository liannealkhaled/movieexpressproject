const express = require("express ");
const app = express();
require("dotenv").config();
app.get("/", (req, res) => {
  res.send("hello application");
});
app.listen(8000, () => {
  console.log("App is running on port 8000");
});
