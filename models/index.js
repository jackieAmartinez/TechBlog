const User = require("./user");
const BlogPost = require("./blogpost");
const Comment = require('./comment');

BlogPost.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(BlogPost, {
   foreignKey: 'user_id'
});

User.hasMany(Comment, {
   foreignKey: 'user_id',
   onDelete: 'CASCADE',
   hooks:true
});

Comment.belongsTo(User, {
   foreignKey: 'user_id',
   onDelete: 'cascade',
   hooks:true
});

BlogPost.hasMany(Comment, {
  foreignKey: 'blogPost_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(BlogPost, {
   foreignKey: 'blogPost_id',
   onDelete: 'CASCADE',
   hooks:true
});

module.exports = { User, BlogPost, Comment };