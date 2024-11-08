const Card = require("../models/cardModel");
 
async function deleteCard(req,res) {
    try {
        await Card.destroy ({where: {title: req.body.name}, })
               
            res.status(200).json({message: `Card ${req.body.name} has been removed!`})
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
 
module.exports = deleteCard;