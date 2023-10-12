require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/add", function (req, res) {
  const obj = req.query;
  console.log(obj);
  res.send("sfguysdfgsuygfsuyd");
});

app.get("/multiply", function (req, res) {
  res.send("multiply");
});

app.get("/sub", function (req, res) {
  res.send("sub");
});

app.get("/div", function (req, res) {
  res.send("div");
});
app.listen(process.env.PORT, () => {
  console.log("server is running");
});
