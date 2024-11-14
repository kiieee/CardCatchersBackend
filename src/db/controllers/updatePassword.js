

const User = require ("../models/userModel");

async function updatePassword(req,res) {
    try { 
        await User.update(
            {
                password: req.body.newPassword
            }, {
        where: {
            email: req.body.email
        }}
    )


    } catch(error) {
        console.log(error);
        res.status(500).json(error);
    }

}

module.exports = updatePassword;