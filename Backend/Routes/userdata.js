const express = require("express");
const ValidateSignupData = require("../Controller/Usersign")
const Createpoll = require("../Controller/Createpoll")
const route = new express.Router();


route.post("/signup", ValidateSignupData.validateSignupData) 
route.post("/signin", ValidateSignupData.validateLoginData)
route.post("/createpoll", Createpoll.createpolldata)
route.get('/createpoll' , Createpoll.getpolldata)
route.delete('/softDelete/:id', Createpoll.softdelete)
route.post('/polldata',Createpoll.polldata)  

module.exports = route;
