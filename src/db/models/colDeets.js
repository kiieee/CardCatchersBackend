const { urlencoded } = require("express");
const connection = require("../connection")
const {DataTypes} = require("sequelize")


const ColDeet = connection.define("ColDeet", {
    colDeetID : {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    colName : {
        type: DataTypes.STRING,
        allowNull: false
    },
    url : {
        type: DataTypes.STRING,
        allowNull: false
    },
    username : {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = ColDeet;