class NewsController {
  index(req, res) {
    res.render("news");
  }
  show(req, res) {
    res.send("show details.....");
  }
}
module.exports = new NewsController();