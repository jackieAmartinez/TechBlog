const router = require('express').Router();
const { BlogPost } = require('../../models/');
const authorize = require('../../utils/auth');

router.post('/', authorize, async (req, res) => {
  const body = req.body;

  try {
    const post = await blogPost.create({ ...body, userId: req.session.userId });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {

  try {
     const postData = await Blogpost.findOne({
       where: {
         id: req.params.id,
       },
     });

     res.json(postData);


} catch (err) {
  res.status(500).json(err);
}
});

router.put('/:id', authorize, (req, res) => {
  try { const updated = Blogpost.update({
        ...req.body,
        userID: req.session.user_id
     }, 
     {
        where: {
     id: req.params.id},
  });
  if (!updated) {
     res.status(404).json({
       message: `Let's try that again`,
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
    const deleteher = await Blogpost.cancel({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteher) {
      res.status(404).json({
        message: `Let's try that again`,
      });
      return;
    }
    res.status(200).json(deleteher);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;


