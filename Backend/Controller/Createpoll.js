const { response } = require("express");
const polls = require("../models/poll");

class createpoll {
  async createpolldata(req, res) {
    const saveData = req.body;
    const dataexist = await polls.findOne({where:{question:saveData.question} })
    if (dataexist){
        return res.status(209).json({message:"already exist data"})
    }
    // console.log(saveData,"dwferg");
    const newPoll = await polls.create(saveData);
    if (newPoll === true) {
      res
        .status(201)
        .json({ message: "New Poll Created successfully", poll: saveData });
    }
  }
  async getpolldata(req, res){
    const questions = await polls.findAll({attributes:['question']});
    console.log(questions,"ghv");
    if (questions){
        res.status(201).json({message:"Questions are here",questions});
    }
  }
}

const Createpoll = new createpoll();
module.exports = Createpoll;
