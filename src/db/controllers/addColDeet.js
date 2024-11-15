
const ColDeet = require("../models/colDeets")
 
async function addColDeet(req,res) {
    try {
       const output = await ColDeet.create(
        {
            username : req.body.username,
            url: req.body.url,
            colName: req.body.colName
        });
       res.status(200).json(output)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
 
module.exports = addColDeet;