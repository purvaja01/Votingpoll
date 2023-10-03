const { response } = require("express");
const polls = require("../models/poll");
const { where } = require("sequelize");

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
    const questions = await polls.findAll({where: {softdelete : false}});
    console.log(questions,"ghv");

    if (questions){
        res.status(201).json({message:"Questions are here",questions});
    }
  }
  async softdelete(req, res) {
    const id = req.params.id; 
    console.log(id, "delet id")
    try {
      const poll = await polls.findByPk(id);
      if (!poll) {
        return res.status(404).json({ message: 'Record not found' });
      }
      poll.deleted_at = new Date(); 
      await poll.update({ softdelete: true });
      await poll.save();
      return res.status(200).json({ message: 'Record soft deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async polldata(req, res) {
    const {id} = req.body;
    const finddata = await polls.findByPk(id);
    if (finddata){
      return res.status(200).json({data:finddata});
    }
    else{
      return res.status(209).json({message:"not found"})
    }

  }
}

const Createpoll = new createpoll();
module.exports = Createpoll;
