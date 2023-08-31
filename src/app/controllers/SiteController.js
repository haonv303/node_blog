const Course = require("../models/Course");
class SiteController {
    index(req, res) {
        Course.find()
            .then((courses, err) => {
                res.json(courses);
            })
            .catch(() => {
                res.status(400).json({ error: "ERROR!!!" });
            });
        // res.render("home");
    }
    search(req, res) {
        res.render("search");
    }
}
module.exports = new SiteController();
