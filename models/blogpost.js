// const { Sequelize, Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/config');

// class Blogpost extends Model {}

// Blogpost.init(
//   {
//     title: DataTypes.STRING,
//     body: DataTypes.STRING
//   },
//   {
//     sequelize
//   }
// );

// module.exports = Post;

// required dependencies
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// game model to organize the shelf before table gets flipped
class Blogpost extends Model {}

Blogpost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "blogpost",
  }
);

module.exports = Blogpost;