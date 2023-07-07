const router = require("express").Router();
const sequelize = require("../config/connection");
const { BlogPost, User, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
      include: [
        {
          model: User
        },
        {
          model: Comment
        },
      ],
    });

    // serialize data so the template can read it
    const BlogPosts = blogPostData.map((BlogPost) => BlogPost.get({ plain: true })
    );

    // pass serialized data and session flag into template
    console.log(BlogPosts)
     res.render("homepage", { 
      blogPosts,
      logged_in: req.session.logged_in,
    });
    } catch (err) {
     console.log(err);
      res.status(500).json(err);
    }
  });

// route set up to find single blog post and render blogPost page
  router.get("/BlogPost/:id", async (req, res) => {
    try {
      const blogPostData = await BlogPost.findByPk(req.params.id, {
        // join user data and comment data with blog post data
        include: [
          {
            model: User
          },
          {
            model: Comment
          },
        ],
      });
  
      const BlogPost = blogPostData.get({ plain: true });
      console.log(BlogPost);
  
      res.render("BlogPost", {
        ...BlogPost,
        logged_in: req.session.logged_in,
      });

    } catch (err) {
      res.status(500).json(err);
      res.redirect("/login");
    }
  });

router.get("/dashboard", async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: BlogPost
        },
        {//sarah gibson friday july 28 at 10:45 - 
          // 
          model: Comment,
        },
      ],
    });

    const user = userData.get({ plain: true });
    console.log(user)

    res.render("dashboard", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
      res.status(500).json(err);
  }
});

// create new or redirects to login if not logged in
router.get("/create", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.render("create", {
        logged_in: req.session.logged_in,
        userId: req.session.user_id,
      });
      return;
    } else {
      res.redirect("/login");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// edit an existing post
router.get("/create/:id", async (req, res) => {
  try {
    const blogPostData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User
        },
        {
          model: Comment
        },
      ],
    });

    const BlogPost = blogPostData.get({ plain: true });
    console.log(BlogPost);

    if (req.session.logged_in) {
      res.render("edit", {
        ...BlogPost,
        logged_in: req.session.logged_in,
        userId: req.session.user_id,
      });
      return;
    } else {
      res.redirect("/login");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.all("/login", (req, res) => {

  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

// Export
module.exports = router;