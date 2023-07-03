const router = require("express").Router();
const { blogPost, User, Comment } = require("../models");

router.get("/", async (req, res) => {
    try {
        const blogPostData = await blogPost.findAll({
            include: [User],
        });

        const allPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));
     res.render("reader-home", { allPosts });
    } catch (err) {
     console.log(err);
      res.status(500).json(err);
    }
  });

router.get("/blogPost/:id", async (req, res) => {
    try {
      const blogPostData = await blogPost.findByPk(req.params.id, {
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
  
      const blogPost = blogpostData.get({ plain: true });
      res.render("blogPost", {
        layout: "main",
        blogPost,
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