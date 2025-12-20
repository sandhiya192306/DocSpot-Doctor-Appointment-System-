const express = require("express");
const userApiRoute = express.Router();
const MyController = require("../controller/userController")

userApiRoute.post("/adduser", MyController.Signup);
userApiRoute.get("/getuser", MyController.getUsers);
 userApiRoute.put("/update/:id", MyController.updateUser);
 userApiRoute.delete("/delete/:id", MyController.deleteUser);


module.exports = userApiRoute;

