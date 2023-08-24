const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const app = express();
const morgan = require("morgan");
const port = 8080;

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(morgan("combined"));

const hbs = exphbs.create({
  /* config */
  extname: ".hbs",
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources/views"));
app.get("/", (req, res) => {
  return res.render("home");
});

app.get("/search", (req, res) => {
  return res.render("search");
});

app.post("/search", (req, res) => {
  // return res.render("search");
  console.log(req.body);
  res.send("");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
