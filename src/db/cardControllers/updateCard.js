const Card = require("../models/cardModel");
 
async function updateCard(req,res) {
    try {
       await Card.update(
        {
            name: req.body.name
        },
        { where: {
            name: req.query.name
        },
        }
       )
       res.status(200).json({message: `Card with name ${req.query.name} has been updated and the name is now ${req.body.name}!`});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
 
module.exports = updateCard;