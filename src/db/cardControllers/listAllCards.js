const Card = require("../models/cardModel");
 
async function listAllCards(req,res) {
    try {
       const output = await Card.findAll({
        where : {
            username : req.body.username
         }
       });
        res.status(200).json(output)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
 
module.exports = listAllCards;