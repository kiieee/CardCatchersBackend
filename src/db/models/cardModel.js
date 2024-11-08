const connection = require("../connection")
const {DataTypes} = require("sequelize")


const Card = connection.define("Card", {
    cardID : {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name : {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false
    },
})

module.exports = Card;