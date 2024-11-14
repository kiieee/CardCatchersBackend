

const User = require ("../models/userModel");

async function updateEmail(req,res) {
    try { 
        await User.update( {
            username: req.body.email
        },
            { where: {
                
            password: req.body.password },
    })

    } catch(error) {
        console.log(error);
        res.status(500).json(error);
    }

}

module.exports = updateEmail;