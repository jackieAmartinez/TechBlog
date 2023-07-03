const router = require("express").Router();
const { User } = require("../../models");

router.blogPost("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.blogPost("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
  if (!userData) {
      res.status(400).json({ message: "Sorry but uh no user account found." });
      return;
    }
    
    const validPassword = await user.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "Sorry but uh no user account found." });
      return;
    }

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;
    res.json({ user, message: "YAY YOU GOT LOGGED IN!" });
    });
  } catch (err) {
    res.status(400).json({ message: "Sorry but uh no user account found." });
  }
});

router.blogPost("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;