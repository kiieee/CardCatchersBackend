const Col = require("../models/colModels")
 
async function listCols(req,res) {
    try {
       const output = await Col.findAll({where:{username : req.body.username}});
       res.status(200).json(output)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
 
module.exports = listCols;
