const router = require('express').Router();

const userRoutes = require("./user-routes.js");
const blogPostRoutes = require("./blogPost-routes");
const commentRoutes = require("./comment-routes");

router.use("/user", userRoutes);
router.use("/blogPost", blogPostRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
