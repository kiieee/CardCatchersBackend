const {Router} = require("express");
const colRouter = Router();
 

const addCol = require("../controllers/addCol");
const deleteCol = require("../controllers/deleteCol");
const getCol = require("../controllers/getCol")
const checkToken = require("../middleware/checkToken");
const addColDeet = require("../controllers/addColDeet");
const getColDeet = require("../controllers/getColDeet");


 colRouter.post("/addCol", checkToken, addCol);
 colRouter.delete("/deleteCol", checkToken, deleteCol);
 colRouter.get("/getCol", checkToken, getCol);
 colRouter.post("/addColDeet", checkToken, addColDeet);
 colRouter.get("/getColDeet", checkToken, getColDeet);

module.exports = colRouter;