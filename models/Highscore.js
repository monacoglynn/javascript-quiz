const {
    Model,
    DataTypes
} = require('sequelize');

const sequelize = require('../config/connection');

class Highscore extends Model {}

Highscore.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    initials: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
});

module.exports = HighScore