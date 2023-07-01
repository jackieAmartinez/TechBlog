
// the queen
  const { User } = require('../models');

  const userData = 
  [
    {
        "userName": "Sal",
        "email": "sal@hotmail.com",
        "password": "password12345"
      },
      {
        "userName": "Lernantino",
        "email": "lernantino@gmail.com",
        "password": "password12345"
      },
      {
        "userName": "Amiko",
        "email": "amiko2k20@aol.com",
        "password": "password12345"
      },
      {
        "userName": "chipchap200",
        "email": "chippy@hotmail.com",
        "password": "password12345"
      },
      {
        "userName": "teddyRoosevelt",
        "email": "teddyboy@gmail.com",
        "password": "password12345"
      },
      {
        "userName": "alexanderHamilton",
        "email": "history@aol.com",
        "password": "password12345"
      }
  ]
  
  const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });
  
  module.exports = seedUsers;
  
  