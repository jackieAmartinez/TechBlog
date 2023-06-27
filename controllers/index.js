// const router = require("express").Router();
// const apiRoutes = require("./api");
// const homeRoutes = require("./homeroutes.js");
// const dashboardRoutes = require("./dashboard-routes.js");

// router.use("/", homeRoutes);
// router.use("/api", apiRoutes);
// router.use("/dashboard", dashboardRoutes);

// module.exports = router;

const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashRoutes);
router.use('/api', apiRoutes);

module.exports = router;