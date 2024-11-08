const {Router} = require("express");
const cardRouter = Router();
 

const addCard = require("../bookControllers/addCard");

const listAllCards = require("../bookControllers/listAllCards");

const updateCard = require("../bookControllers/updateCard");

const deleteCard = require("../bookControllers/deleteCard");

const cardDetails = require("../bookControllers/cardDetails");

// const deleteAllCards = require("../controllers/deleteAllCards");
 
cardRouter.post("/addCard", addCard);
cardRouter.get("/listAllCards", listAllCards);
cardRouter.put("/updateCard", updateCard);
cardRouter.delete("/deleteCard", deleteCard);
// cardRouter.delete("deleteAllCards", deleteAllCards);
cardRouter.get("/cardDetails", cardDetails);

module.exports = cardRouter;