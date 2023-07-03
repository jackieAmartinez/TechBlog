const router = require("express").Router();
const { User } = require("../../models");

// posts new user email, username, and password to database
router.post("/", async (req, res) => {
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

// route validates user credentials and logs user in if a match is found in the database
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

  if (!userData) {
      console.log("email not found");
      res
      .status(400)
      .json({ message: "Something seems to be me missing. Let's try again." });
      return;
    }
    
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
        console.log("password does not match")
      res.status(400).json({ message: "Something seems to be me missing. Let's try again." });
      return;
    }

    req.session.save(() => {
      req.session.user_Id = userData.id;
      req.session.logged_In = true;

    res.json({ user: userData, message: "Log In Successful" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// when user logs out the session is ended
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;