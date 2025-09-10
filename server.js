const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));


app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", (req, res) => {
  const { name, age } = req.body;
  res.render("result", { name, age });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:3000`);
});
