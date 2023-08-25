const newsRouter = require("./news");
const siteRouter = require("./site");
function route(app) {
  app.use("/", newsRouter);
  app.use("/", siteRouter);
}
module.exports = route;
