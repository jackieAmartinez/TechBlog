const seedUsers = require('./userData');
const seedPosts = require('./blogPostData');
const seedComments = require('./commentData');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    //5th floor yellow elevators obgyn triage 317 880-7666

    await seedUsers();
        console.log('\n**********USERS SEEDED**********\n');
    await seedPosts();
        console.log('\n**********BLOGPOSTS SEEDED**********\n');
    await seedComments();
        console.log('\n********COMMENTS SEEDED*********\n');
    process.exit(0);
};

seedAll();