// imports
const router = require('express').Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const commentRoutes = require("./commentRoutes");

// middleware
router.use("/user", userRoutes);
router.use("/blogPost", postRoutes);
router.use("/comment", commentRoutes);

// efforts
module.exports = router;
