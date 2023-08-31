const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const morgan = require("morgan");

const route = require("./routes");
const db = require("../src/config/db");

//connect db
db.connect();

const app = express();
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

app.set("views", path.join(__dirname, "resources", "views"));

route(app);

app.listen(port, () => console.log(`App listening on port ${port}!`));
