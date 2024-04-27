const express = require("express");
const userRegister = require("../Controller/user/userRegister");
const userLogin = require("../Controller/user/userLogin");

const Routes = express.Router();
Routes.post("/login", userLogin);
Routes.post("/register", userRegister);

module.exports = Routes;
