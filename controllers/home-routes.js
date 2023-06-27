const router = require("express").Router();
const { User, Blogpost, Comment } = require("../models");

// pulls the user's posts to display once logged in
router.get("/", async (req, res) => {
  try {
    // Find the logged in user based on the session ID and return their data
    const blogPosts = await Blogpost.findAll({
      include: [User],
    });
    const allPosts = blogPosts.map((bp) => bp.get({ plain: true }));
    res.render("reader-home", {
      allPosts
    });
  } catch (err) {
   console.log(err);
    res.status(500).json(err);
  }
});

// pulls specific posts once user is logged in
router.get("/post/:id", async (req, res) => {
  try {
    const bpData = await Blogpost.findByPk(req.params.id, {
      include: [
         {
            model: User,
         },
         {
            model: Comment
         }
      ],
    });
    const blogPost = bpData.get({ plain: true });
    console.log(blogPost)
    res.render("post", {
      layout: "main",
      blogPost
    });
    // tells what error occurred
  } catch (err) {
    res.status(500).json(err);
  }
});

// check for log in and authorize and redirect
router.get("/login", (req, res) => {
  res.render("login");
});

// route for reviewing all users 
router.get("/list", async (req, res) => {
  const userData = await User.findAll().catch((err) => {
    res.json(err);
  });
  const users = userData.map((user) => user.get({ plain: true }));

  res.json(users);
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
  

// const router = require('express').Router();
// const { Post, Comment, User } = require('../models/');

// router.get('/', async (req, res) => {
//     try {
//         const postData = await Post.findAll({
//             include: [User],
//         });

//         constposts = postData.map((post) => post.get({ plain: true }));
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/post/:id', async (req, res) => {
//     try {
//       const postData = await Post.findByPk(req.params.id, {
//         include: [
//           User,
//           {
//             model: Comment,
//             include: [User],
//           },
//         ],
//       });
  
//       if (postData) {
//         const post = postData.get({ plain: true });
  
//         res.render('single-post', { post });
//       } else {
//         res.status(404).end();
//       }
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//   router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }
  
//     res.render('login');
//   });
  
//   router.get('/signup', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }
  
//     res.render('signup');
//   });
  
//   module.exports = router;
