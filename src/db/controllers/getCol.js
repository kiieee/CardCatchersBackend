const Col = require("../models/colModels")
 
async function getCol(req,res) {
    try {
       const output = await Col.findOne(
        { colName : req.body.colName
       });
       res.status(200).json(output)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
 
module.exports = getCol;