const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize
  }
);

module.exports = Comment;

// // required dependencies
// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// // game model to organize the shelf before table gets flipped
// class Comment extends Model {}

// Comment.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     body: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     userID: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "user",
//         key: "id",
//       },
//     },
//     postID: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "blogpost",
//         key: "id",
//       },
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "comment",
//   }
// );

// module.exports = Comment;
