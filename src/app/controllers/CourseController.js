const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
    // [GET] /courses/:slug
    detail(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render("courses/course-detail", {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
    create(req, res) {
        res.render("courses/create");
    }
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect("/"))
            .catch((error) => {
                console.error("Lưu thất bại:", error);
            });
    }
    //Get course/edit/:id
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render("courses/edit", {
                    course: mongooseToObject(course),
                })
            )
            .catch(next);
    }
    // PUT//courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect("/me/stored/courses"))
            .catch(next);
    }
}

module.exports = new CourseController();
