const bcrypt = require("bcrypt");
const { Op } = require("sequelize");
const User = require("../models/userModel");

async function checkPassword(req, res, next) {
    try {
        
        const email = req.body.email || "";
        const username = req.body.username || "";

        
        const userDetails = await User.findOne({
            where: { [Op.or]: [{ email }, { username }] }
        });

        
        if (!userDetails) {
            return res.status(404).json({ error: "User not found" });
        }

        const plainTextPassword = req.body.password;
        const hashedPassword = userDetails.dataValues.password;

        
        const isPasswordCorrect = await bcrypt.compare(plainTextPassword, hashedPassword);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: "Wrong password" });
        }

        
        req.body.email = userDetails.dataValues.email;
        req.body.username = userDetails.dataValues.username;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = checkPassword;
