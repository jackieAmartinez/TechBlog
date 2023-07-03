const router = require("express").Router();
const { blogPost } = require("../../models/");
const authorize = require("../../utils/authorize");


router.blogPost("/", authorize, async (req, res) => {
  const body = req.body; 
  try {
     const blogPost = await blogPost.create({
       ...req.body,
       userID: req.session.user_id
     });
     res.status(200).json(blogPost);
   } catch (err) {
     res.status(400).json(err);
   }
});

router.get('/:id', async (req, res) => {

  try {
     const blogPostData = await blogPost.findOne({
       where: {
         id: req.params.id,
       },
     });
     res.json(blogPostData);
} catch (err) {
  res.status(500).json(err);
}
});

router.put("/:id", authorize, (req, res) => {
  try { const updated = blogPost.update({
        ...req.body,
        userID: req.session.user_id
     }, 
     {
        where: {
     id: req.params.id},
  });
  if (!updated) {
     res.status(404).json({
       message: `You spelled stuff horrible huh?`,
     });
     return;
   }
   res.status(200).json(updated);
} catch (err) {
  res.status(500).json(err);
}
});

router.delete("/:id", authorize, async (req, res) => {
  try {
    const yeetyeet = await blogPost.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!yeetyeet) {
      res.status(404).json({
        message: `How dare you delete these things!`,
      });
      return;
    }
    res.status(200).json(yeetyeet);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;