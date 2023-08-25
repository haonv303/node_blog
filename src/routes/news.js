const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");
router.use("/news/:slug", newsController.show);
router.use("/news", newsController.index);
module.exports = router;
