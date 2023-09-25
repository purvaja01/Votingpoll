import React, { useState } from "react";
import "./Createpole.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import createpoledb  from "../Utils/Createpole";
import {Link, useNavigate } from "react-router-dom";


function PollPage() {
  const [polls, setPolls] = useState([]);
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState([]);
  const navigate = useNavigate();
  const handleChoiceChange = (e, index) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = e.target.value;
    setChoices(updatedChoices);
  };

  const addChoice = () => {
    setChoices([...choices, ""]);
  };

  const removeChoice = (index) => {
    const updatedChoices = [...choices];
    updatedChoices.splice(index, 1);
    setChoices(updatedChoices);
  };

  const handleAddPoll = async (e) => {
    e.preventDefault();
    navigate("/Dashboard")
    if (question.trim() !== "" && choices.length >= 2){
      const newPoll = {
        question,
        choices,
      };

      const createpoll = await createpoledb.createpolefunc(newPoll);
      setPolls([...polls, newPoll]);
      setQuestion("");
      setChoices([]);   
    }   
  };

  return (
    <div>
      <h2 className="createpoll1">Create a Poll</h2>
      <form onSubmit={handleAddPoll} className="createpoll2">
        <TextField
          label="Enter Question Here"
          variant="filled"
          focused
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          sx={{ marginLeft: 58, width: 400 }}
          inputProps={{ style: { color: "#19015B" } }}
        />
        <br/>
        {choices.map((choice, index) => (
          <div key={index}>
            <TextField
              sx = {{ marginLeft: 65 }}
              id = "standard-basic"
              label = {`Choice ${index + 1}`}
              variant ="standard"
              type = "text"
              value = {choice}
              onChange={(e) => handleChoiceChange(e, index)}
            />

            <Button
              sx={{ marginTop: 2 }}
              type="button"
              onClick={() => removeChoice(index)}
              variant="text"
            >
              Remove Choice
            </Button>
          </div>
        ))}
        <br />
        <br />
        <Button
          variant="contained"
          type="button"
          onClick={addChoice}
          disableElevation
          sx={{
            marginLeft: 58,
            backgroundColor: "#19015B",
          }}
        >
          Add Choice
        </Button>
        <Button
        
          sx={{
            marginLeft: 20,
          }}
          type="button"
          onClick={handleAddPoll}
        >Create Poll
        
        </Button>
      </form>
    </div>
  );
}

export default PollPage;