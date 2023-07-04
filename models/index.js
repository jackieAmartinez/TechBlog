const User = require("./user");
const BlogPost = require("./blogPost");
const Comment = require('./comment');

BlogPost.belongsTo(User, {
  foreignKey: 'user_Id',
});

User.hasMany(BlogPost, {
   foreignKey: 'user_Id',
   onDelete: 'CASCADE',
});

User.hasMany(Comment, {
   foreignKey: 'user_Id',
   onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
   foreignKey: 'user_Id',
});

BlogPost.hasMany(Comment, {
  foreignKey: 'blogPost_Id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(BlogPost, {
   foreignKey: 'blogPost_Id',
   onDelete: 'CASCADE',
});

module.exports = { User, BlogPost, Comment };