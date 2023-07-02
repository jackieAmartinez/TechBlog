const User = require("./user");
const BlogPost = require("./blogPost");
const Comment = require('./comment');

BlogPost.belongsTo(User, {
  foreignKey: 'user_Id',
  onDelete: 'CASCADE',
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
   onDelete: 'CASCADE',
});

BlogPost.hasMany(Comment, {
  foreignKey: 'blogPost_Id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(BlogPost, {
   foreignKey: 'post_Id',
   onDelete: 'CASCADE',
});

module.exports = { User, BlogPost, Comment };