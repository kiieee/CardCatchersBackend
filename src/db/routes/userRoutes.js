const {Router} = require("express");
const userRouter = Router();
const addUser = require("../controllers/addUser");
const listAllUsers = require("../controllers/listAllUsers");
const checkPassword = require("../middleware/checkPassword");
const hashPassword = require("../middleware/hashPassword");
const login = require("../controllers/login");
const checkToken = require("../middleware/checkToken");
const updateEmail = require("../controllers/updateEmail");
const updateUsername = require("../controllers/updateUsername");
const updatePassword = require("../controllers/updatePassword");
const deleteUser = require("../controllers/deleteUser");




userRouter.post("/addUser", hashPassword, addUser)
userRouter.get("/listAllUsers", checkToken, listAllUsers)
userRouter.post("/login", checkPassword, login)

userRouter.put("/updateUsername", checkToken, updateUsername)
userRouter.put("/updateEmail", checkToken, updateEmail)
userRouter.put("/updatePassword", checkToken, hashPassword, updatePassword)
userRouter.delete("/deleteUser", checkToken, deleteUser)

module.exports = userRouter;