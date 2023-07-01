const router = require("express").Router();
const { Post, User, Comment } = require("../models");

router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User],
        });

        const allPosts = postData.map((post) => post.get({ plain: true }));
     res.render("reader-home", { allPosts });
    } catch (err) {
     console.log(err);
      res.status(500).json(err);
    }
  });

router.get("/post/:id", async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
          },
          {
            model: Comment,
            include: [User],
          },
        ],
      });
  
      const Post = postData.get({ plain: true });
      res.render("post", {
        layout: "main",
        Post,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/login", (req, res) => {
    res.render('login');
  });
  
  router.get("/list", async (req, res) => {
    const userData = await User.findAll().catch((err) => {
      res.json(err);
    });
    const users = userData.map((user) => user.get({ plain: true }));
  
    res.json(users);
  });

  router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('signup');
  });
  
  module.exports = router;