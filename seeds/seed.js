// trust fund
// Imports
const sequelize = require("../config/connection");
const { User, BlogPost, Comment } = require("../models");

const userData = require("./userData.json");
const blogPostData = require("./blogPostData.json");
const commentData = require("./commentData.json");

// Seeds database with user data, blogPost data, and comment data
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blogPost of blogPostData) {
    await BlogPost.create({
      ...blogPost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const comments = await Comment.bulkCreate(commentData);

  process.exit(0);
};

// Function call to seed database
seedDatabase();



// the queen
// const sequelize = require('../config/connection');
// const seedUsers = require('./userData');
// const seedPosts = require('./postData');
// const seedComments = require('./commentData');

// const seedAll = async () => {
//     await sequelize.sync({ force: true });

//     await seedUsers();
//         console.log('\n**********USERS SEEDED**********\n');
//     await seedPosts();
//         console.log('\n**********POSTS SEEDED**********\n');
//     await seedComments();
//         console.log('\n********COMMENTS SEEDED*********\n');
//     process.exit(0);
// };

// seedAll();