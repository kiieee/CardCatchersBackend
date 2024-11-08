const Card = require("../models/cardModel");
 
async function addCard(req,res) {
    try {
       await Card.create(
        {
            name :req.body.name,
        }
       )

       res.status(200).json({message: `Card ${req.body.name} has been added!`})
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
 
module.exports = addCard;