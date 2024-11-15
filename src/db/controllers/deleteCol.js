const Col = require("../models/colModels")
 
async function deleteCol(req,res) {
    try {
        await Col.destroy ({where: {colID: req.body.colID}, })
               
            res.status(200).json({message: `Collection ${req.body.colName} has been removed!`})
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
 
module.exports = deleteCol;