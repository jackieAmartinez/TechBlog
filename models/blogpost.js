// required dependencies
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// game model to organize the shelf before table gets flipped
class blogPost extends Model {}

blogPost.init(
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
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_ID: {
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
    modelName: "blogPost",
  }
);

module.exports = blogPost;