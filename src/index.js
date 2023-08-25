const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const app = express();
const morgan = require("morgan");
const port = 8080;

const route = require("./routes");

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

route(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
