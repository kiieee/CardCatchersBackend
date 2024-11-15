const Col = require("../models/colModels")
async function addCol(req,res) {
    try {
        const output = await Col.create({
            colName: req.body.colName,
            colGame : req.body.colGame,
            username : req.body.username
        })
    console.log(output);
    res.status(200).json({message: `Collection ${req.body.colName} has been created!`})
    } catch(error) {
        console.log(error);
        res.status(500).json(error)
    }
}

module.exports = addCol;