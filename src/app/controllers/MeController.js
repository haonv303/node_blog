const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class MeController {
    // get me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([
            Course.find({}),
            Course.countDocumentsWithDeleted({ deleted: true }),
        ])
            .then(([courses, deletedCount]) =>
                res.render("me/stored-courses", {
                    deletedCount,
                    courses: mutipleMongooseToObject(courses),
                })
            )
            .catch(next);
        // Course.countDocumentsDeleted()
        //     .then((deletedCount) => {
        //         console.log(deletedCount);
        //     })
        //     .catch(() => {});

        // Course.find({})
        //     .then((courses) => res.render("me/stored-courses", {
        //             courses: mutipleMongooseToObject(courses),
        //         })
        //     )
        //     .catch(next);
    }

    trashCourses(req, res, next) {
        Course.findDeleted({ deleted: true })
            .then((courses) =>
                res.render("me/trash-courses", {
                    courses: mutipleMongooseToObject(
                        courses.filter((course) => course.deleted)
                    ),
                })
            )
            .catch(next);
    }
}

module.exports = new MeController();
