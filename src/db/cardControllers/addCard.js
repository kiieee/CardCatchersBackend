const Card = require("../models/cardModel");
 
async function addCard(req,res) {
    try {
       await Card.create(
        {
            url :req.body.url,
            name : req.body.name,
            game: req.body.game
        }
       )

       res.status(200).json({message: `Card ${req.body.name} has been added!`})
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
 
module.exports = addCard;
