import api from "../Services/api";
const apiob = new api();


class createpolevalidation {
  async createpolefunc(newPoll) {
    if (newPoll.question.trim() !== "" && newPoll.choices.length >= 2) {
     
      const res = await apiob.Createpollapi(newPoll);
      return res;
    }
  }
}

const createpoledb = new createpolevalidation();

export default createpoledb;