const Card = require("../models/cardModel");
 
async function cardDetails(req,res) {
    try {
       await Card.findbypk();
       res.status(200).json(output)
    } catch (error) {
        console.log(error);
       
    }
}
 
module.exports = cardDetails;