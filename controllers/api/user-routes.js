const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json({ message: 'No user account found!' });
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

// const router = require("express").Router();
// const { User } = require("../../models");

// router.post("/", async (req, res) => {
//    try {
//      const userData = await User.create(req.body);
//      req.session.save(() => {
//        req.session.user_id = userData.id;
//        req.session.logged_in = true;
//        res.status(200).json(userData);
//      });
//      // catch error to tell what was wrong
//    } catch (err) {
//      res.status(400).json(err);
//    }
//  });

//  router.post("/login", async (req, res) => {
//    try {
//      const userData = await User.findOne({ where: { username: req.body.username } });
//      // check for existing email
//      if (!userData) {
//        res
//          .status(400)
//          .json({ alert: `I'M AFRAID I CAN'T ACCEPT THAT INPUT, DAVE` });
//        return;
//      }
//      // check for matching password
//      const goodPassword = await userData.checkPassword(req.body.password);
//      if (!goodPassword) {
//        res
//          .status(400)
//          .json({ message: `I'M AFRAID I CAN'T ACCEPT THAT INPUT, DAVE` });
//        return;
//      }
//      // if good log in
//      req.session.save(() => {
//        req.session.user_id = userData.id;
//        req.session.logged_in = true;
//        res.json({ user: userData, message: "YES! YES! YES!" });
//      });
//      // catch error to tell what was wrong
//    } catch (err) {
//      res.status(400).json(err);
//    }
//  });

//  router.post("/logout", (req, res) => {
//    // on log out and destroy session data
//    if (req.session.logged_in) {
//      req.session.destroy(() => {
//        res.status(204).end();
//      });
//      // return an error if something happens
//    } else {
//      res.status(404).end();
//    }
//  });

//  module.exports = router;