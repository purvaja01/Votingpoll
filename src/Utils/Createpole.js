import api from "../Services/api";
const apiob = new api();

class createpolevalidation {
  async createpolefunc(data) {
    if (question.trim() !== "" && choices.length >= 2) {
      const newPoll = {
        question,
        choices,
      };
      setQuestion("");
      setChoices([]);
    }
  }
}

export const createpoledb = new createpolevalidation();