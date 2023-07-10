// Imports
const router = require("express").Router();
const { BlogPost } = require("../../models");
const authorize = require("../../utils/authorize");

// Route to create a new blog post
router.post("/", authorize, async (req, res) => {
  const body = req.body; 
  try {
     const newBlogPost = await BlogPost.create({
       ...req.body,
       userID: req.session.user_id
     });
     res.status(200).json(newBlogPost);
   } catch (err) {
     res.status(400).json(err);
   }
});

// route to read all blog posts
router.get('/:id', async (req, res) => {

  try {
     const blogPostData = await BlogPost.findOne({
       where: {
         id: req.params.id,
       },
     });
     res.json(blogPostData);
} catch (err) {
  res.status(500).json(err);
}
});

// Route to edit an existing blog post
router.put("/:id", authorize, (req, res) => {
  try { const blogPostData = BlogPost.update({
        ...req.body,
        userID: req.session.user_id
     }, 
     {
        where: {
     id: req.params.id},
  });
  if (!blogPostData) {
     res.status(404).json({
       message: "Something seems to be me missing, we cannot find a comment with that exact ID. Let's try again.",
     });
     return;
   }
   res.status(200).json(blogPostData);
} catch (err) {
  res.status(500).json(err);
}
});

// Route to delete an existing blog post
router.delete("/:id", authorize, async (req, res) => {
  try {
    const sashayAway = await BlogPost.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!sashayAway) {
      res.status(404).json({
        message: `How dare you delete these things!`,
      });
      return;
    }
    res.status(200).json(sashayAway);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;