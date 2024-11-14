

const User = require ("../models/userModel");

async function updateEmail(req,res) {
    try { 
        await User.update( {
            email: req.body.email
        })

    } catch(error) {
        console.log(error);
        res.status(500).json(error);
    }

}

module.exports = updateEmail;