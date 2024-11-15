
const ColDeet = require("../models/colDeets")
 
async function delColDeet(req,res) {
    try {
        const colDeetID = await colDeet.findOne({
            where : {
                colName : req.body.colName,
                username : req.body.username,
                url : req.body.url,
            }
        })
        console.log(colDeetID);
       const output = await ColDeet.destroy({ where: { colDeetID: colDeetID.colDeetID }});
       res.status(200).json(output)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
 
module.exports = delColDeet;