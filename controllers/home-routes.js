const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User],
        });

        constposts = postData.map((post) => post.get({ plain: true }));
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          User,
          {
            model: Comment,
            include: [User],
          },
        ],
      });
  
      if (postData) {
        const post = postData.get({ plain: true });
  
        res.render('single-post', { post });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });
  
  module.exports = router;


//   const router = require("express").Router();
// const { User, Blogpost, Comment } = require("../models");

// // pulls the user's games to display on the shelf once logged in
// router.get("/", async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID and return their shelf data
//     const blogPosts = await Blogpost.findAll({
//       include: [{ model: User }],
//     });
//     const allPosts = blogPosts.map((bp) => bp.get({ plain: true }));
//     res.render("reader-home", {
//       allPosts
//     });
//   } catch (err) {
//    console.log(err);
//     res.status(500).json(err);
//   }
// });

// // pulls specific game on the shelf data to render in isolation once teh user is logged in
// router.get("/post/:id", async (req, res) => {
//   try {
//     const bpData = await Blogpost.findByPk(req.params.id, {
//       include: [
//          {
//             model: User,
//          },
//          {
//             model: Comment,
//             include: [User],
//          }
//       ],
//     });
//     const blogPost = bpData.get({ plain: true });
//     res.render("post", {
//       ...blogPost
//     });
//     // tells what error occurred
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // check for log in and authorize and redirect or move along
// router.get("/login", (req, res) => {
//   res.render("login");
// });

// // route for reviewing all users - not accessible through user interface
// router.get("/list", async (req, res) => {
//   const userData = await User.findAll().catch((err) => {
//     res.json(err);
//   });
//   const users = userData.map((user) => user.get({ plain: true }));

//   res.json(users);
// });

// // route for reviewing all games - not accessible through user interface
// router.get("/box", async (req, res) => {
//   const gameData = await Game.findAll().catch((err) => {
//     res.json(err);
//   });
//   const games = gameData.map((game) => game.get({ plain: true }));

//   res.json(games);
// });

// module.exports = router;
  