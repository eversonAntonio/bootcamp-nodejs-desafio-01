const express = require("express");
const nunjucks = require("nunjucks");

const app = express();
nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

app.set("view engine", "njk");
app.set(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.send("Hello");
});

app.listen(3000);
