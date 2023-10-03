const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Sequalize/sequalize'); 

class result extends Model { }

result.init(
    {
        Q_id :{
            type : DataTypes.INTEGER,
            allowNull: false,
           
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
 
        },
        answer: {
            type: DataTypes.STRING, 
            allowNull: false,
        }
        
    },
    {
        sequelize,
        modelName: "result",
        tableName: "result",
    }
);

module.exports = result;