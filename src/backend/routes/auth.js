const authRouter = require("express").Router();
const { getAllUsers } = require("../controllers/auth");

authRouter.get("/login", getAllUsers);
authRouter.post("/register", () => {});

module.exports = authRouter;
