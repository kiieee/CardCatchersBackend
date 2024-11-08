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
    colID : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cardID : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id : {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = ColDeet;