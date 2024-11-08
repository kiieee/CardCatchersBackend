const Col = require("../models/colDeets")
 
async function getColDeet(req,res) {
    try {
       const output = await Col.findAll(
        {});
       res.status(200).json(output)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
 
module.exports = getColDeet;