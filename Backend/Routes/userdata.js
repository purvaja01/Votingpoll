const user = require("../models/user");
const express = require("express");
const ValidateSignupData = require("../Controller/Usersign")
const route = new express.Router();


route.post("/signup", ValidateSignupData.validateSignupData) 
route.post("/signin", ValidateSignupData.validateLoginData)

module.exports = route;
