const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Sequalize/sequalize'); // Import the Sequelize instance

class Poll extends Model { }

Poll.init(
    {
        id :{
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        question: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        choices: {
            type: DataTypes.JSON, 
            allowNull: false,
        },
        softdelete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    },
    {
        sequelize,
        modelName: "Poll",
        tableName: "polls",
    }
);

module.exports = Poll;