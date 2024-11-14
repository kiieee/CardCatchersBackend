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




userRouter.post("/addUser", hashPassword, addUser)
userRouter.get("/listAllUsers", checkToken, listAllUsers)
userRouter.post("/login", checkPassword, login)

userRouter.put("updateUsername", checkPassword, updateUsername)
userRouter.put("updateEmail", checkPassword, updateEmail)
userRouter.put("updatePassword", checkToken, updatePassword)

module.exports = userRouter;