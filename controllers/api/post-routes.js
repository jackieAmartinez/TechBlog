const router = require("express").Router();
const { Post } = require("../../models/");
const authorize = require("../../utils/authorize");


router.post("/", authorize, async (req, res) => {
  const body = req.body; 
  try {
     const post = await Post.create({
       ...req.body,
       userID: req.session.user_id
     });
     res.status(200).json(post);
   } catch (err) {
     res.status(400).json(err);
   }
});

router.get('/:id', async (req, res) => {

  try {
     const postData = await post.findOne({
       where: {
         id: req.params.id,
       },
     });
     res.json(postData);
} catch (err) {
  res.status(500).json(err);
}
});

router.put("/:id", authorize, (req, res) => {
  try { const updated = Post.update({
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
    const yeetyeet = await Post.destroy({
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