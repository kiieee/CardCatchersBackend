const connection = require("../connection")
const {DataTypes} = require("sequelize")


const Col = connection.define("Col", {
    colID : {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    colName : {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    colGame : {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false
    },
        
    username: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    }
})

module.exports = Col;
