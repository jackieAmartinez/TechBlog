const { User } = require('../models');

const userData = 
  [
    {
        "name": "Zelia",
        "email": "nuttal@gmail.com",
        "password": "password12345"
      },
      {
        "name": "Bertha Parker",
        "email": "pallancody@gmail.com",
        "password": "password12345"
      },
      {
        "name": "Ban",
        "email": "zhaoban@gmail.com",
        "password": "password12345"
      },
      {
        "name": "Wang",
        "email": "zhenyi@gmail.com",
        "password": "password12345"
      },
      {
        "name": "Carme",
        "email": "adelinaalonso@gmail.com",
        "password": "password12345"
      },
      {
        "name": "Fatima",
        "email": "demadrid@gmail.com",
        "password": "password12345"
      }
  ]
  
  // seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!
  const seedUsers = () => User.bulkCreate(userData);
  
  module.exports = seedUsers;
  
  