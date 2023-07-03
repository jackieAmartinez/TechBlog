// imports
const router = require('express').Router();
const userRoutes = require("./userRoutes.js");
const blogPostRoutes = require("./blogPostRoutes");
const commentRoutes = require("./commentRoutes");

// middleware
router.use("/user", userRoutes);
router.use("/blogPost", blogPostRoutes);
router.use("/comment", commentRoutes);

// efforts
module.exports = router;
