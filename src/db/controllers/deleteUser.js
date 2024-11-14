const User = require("../models/userModel");
 
async function deleteUser(req,res) {
    try {
        await user.destroy ({where: {username: req.body.username}, })
               
            res.status(200).json({message: `User ${req.body.username} has been deleted!`})
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
 
module.exports = deleteUser;