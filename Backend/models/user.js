const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Sequalize/sequalize"); // Adjust the path to your Sequelize connection

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Ensure email is unique
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type:DataTypes.BOOLEAN,
      defaultValue: false,
    }
  },
  {
    sequelize,
    modelName: "User", // Model name (optional)
    tableName: "users", // Table name in the database (optional)
  }
);

module.exports = User;
