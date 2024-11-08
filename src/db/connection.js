const {Sequelize} = require("sequelize");
require("dotenv").config();
console.log(process.env.MYSQL_URI);
const connection = new Sequelize(process.env.MYSQL_URI);

    try {
        connection.authenticate();
        console.log("Successfully connected to database");
    } catch (error) {
        console.log(error);
    }


module.exports = connection;