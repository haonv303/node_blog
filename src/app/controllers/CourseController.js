const Course = require("../models/Course");

class CourseController {
    // [GET] /courses/:slug
    show(req, res) {
        res.send("course DETAIL!!!");
    }
}

module.exports = new CourseController();
