const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Sequalize/sequalize'); // Import the Sequelize instance

class Poll extends Model { }

Poll.init(
    {
        question: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        choices: {
            type: DataTypes.JSON, // Store choices as JSON
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "polls", // Table name in the database (optional)
    }
);

module.exports = Poll;