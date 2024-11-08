const {Router} = require("express");
const cardRouter = Router();
 

const addCard = require("../cardControllers/addCard");

const listAllCards = require("../cardControllers/listAllCards");

const updateCard = require("../cardControllers/updateCard");

const deleteCard = require("../cardControllers/deleteCard");

const cardDetails = require("../cardControllers/cardDetails");

const checkToken = require("../middleware/checkToken");

// const deleteAllCards = require("../controllers/deleteAllCards");
 
cardRouter.post("/addCard", checkToken, addCard);
cardRouter.get("/listAllCards", checkToken, listAllCards);
cardRouter.put("/updateCard", checkToken, updateCard);
cardRouter.delete("/deleteCard", checkToken, deleteCard);
// cardRouter.delete("deleteAllCards", checkToken, deleteAllCards);
cardRouter.get("/cardDetails", checkToken, cardDetails);

module.exports = cardRouter;