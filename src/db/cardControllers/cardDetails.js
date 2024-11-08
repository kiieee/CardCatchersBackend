const Card = require("../models/cardModel");
 
async function cardDetails(req,res) {
    try {
       const output = await Card.findOne(
        { name : req.body.name
       });
       res.status(200).json(output)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
 
module.exports = cardDetails;