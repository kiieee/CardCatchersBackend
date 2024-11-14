

const User = require ("../models/userModel");

async function updateUsername(req,res) {
    try { 
        await User.update(
            {
                username: req.body.newUsername
            }, {
        where: {
            email: req.body.email
        }}
    )
    res.status(200).json({message: `Updated username to ${req.body.newUsername}`})

    } catch(error) {
        console.log(error);
        res.status(500).json(error);
    }

}

module.exports = updateUsername;