const router = require("express").Router();
const { BlogPost, User, Comment } = require("../models");
const authorize = require("../utils/authorize");

router.get("/", async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          attributes: ["comment_body"],
        },
      ],
    });

    // serialize data so the template can read it
    const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true })
    );

    // pass serialized data and session flag into template
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
  router.get("/blogPost/:id", authorize, async (req, res) => {
    try {
      const blogPostData = await BlogPost.findByPk(req.params.id, {
        // join user data and comment data with blog post data
        include: [
          {
            model: User,
            attributes: ["name"],
          },
          {
            model: Comment,
            include: [User],
          },
        ],
      });
  
      const blogPost = blogPostData.get({ plain: true });
      console.log(blogPost);
  
      res.render("blogPost", {
        ...blogPost,
        logged_in: req.session.logged_in,
      });

    } catch (err) {
      res.status(500).json(err);
      res.redirect("/login");
    }
  });

  // THIS IS A SAVE POINT - START HERE WHEN YOU RETURN

router.get("/dashboard", authorize, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: BlogPost,
          include: [User],
        },
        {
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
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    const blogPost = blogPostDdata.get({ plain: true });
    console.log(blogPost);

    if (req.session.logged_in) {
      res.render("edit", {
        ...blogPost,
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