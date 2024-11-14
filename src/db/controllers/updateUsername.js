

const User = require ("../models/userModel");

async function updateUsername(req,res) {
    try { 
        await User.update( {
        where: {
            username: req.body.username
        }}
    )

    } catch(error) {
        console.log(error);
        res.status(500).json(error);
    }

}

module.exports = updateUsername;