

const User = require ("../models/userModel");

async function updateEmail(req,res) {
    try { 
        await User.update(
            {
                email: req.body.newEmail
            }, {
        where: {
            email: req.body.email
        }}
    )
    res.status(200).json({message: `Updated email to ${req.body.newEmail}`})

    } catch(error) {
        console.log(error);
        res.status(500).json(error);
    }

}

module.exports = updateEmail;