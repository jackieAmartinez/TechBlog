const User = require("./user");
const BlogPost = require("./blogpost");
const Comment = require('./comment');

BlogPost.belongsTo(User, {
  foreignKey: 'user_Id'
});

User.hasMany(BlogPost, {
   foreignKey: 'user_Id'
});

User.hasMany(Comment, {
   foreignKey: 'user_Id',
   onDelete: 'CASCADE',
   hooks:true
});

Comment.belongsTo(User, {
   foreignKey: 'user_Id',
   onDelete: 'cascade',
   hooks:true
});

BlogPost.hasMany(Comment, {
  foreignKey: 'blogPost_Id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(BlogPost, {
   foreignKey: 'blogPost_Id',
   onDelete: 'CASCADE',
   hooks:true
});

module.exports = { User, BlogPost, Comment };