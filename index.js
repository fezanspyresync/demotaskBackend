require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/add", function (req, res) {
  const num01 = Number(req.query.param1);
  const num02 = Number(req.query.param2);
  const result = num01 + num02;
  res.status(200).send(`${result}`);
});

app.get("/multiply", function (req, res) {
  const num01 = Number(req.query.param1);
  const num02 = Number(req.query.param2);
  const result = num01 * num02;
  res.status(200).send(`${result}`);
});

app.get("/sub", function (req, res) {
  const num01 = Number(req.query.param1);
  const num02 = Number(req.query.param2);
  const result = num01 - num02;
  res.status(200).send(`${result}`);
});

app.get("/div", function (req, res) {
  const num01 = Number(req.query.param1);
  const num02 = Number(req.query.param2);

  if (num02 === 0) {
    res.status(400).send("Cannot divide by zero");
  } else {
    const result = num01 / num02;
    res.status(200).send(`${result}`);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
