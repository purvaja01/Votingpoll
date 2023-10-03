import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import SearchAppBar from "../Components/searchbar";
import StickyHeadTable from "../Components/Userpoll";
// import MenuItem from "@mui/material/MenuItem";
// import  Checkbox  from "@mui/material/Checkbox";

function QuestionWithOptions() {
  const [question, setQuestion] = useState(""); // State for the question
  const [options, setOptions] = useState([]); // State for the options
  const [selectedOption, setSelectedOption] = useState(""); // State for the selected option

  useEffect(() => {
    fetch("http://localhost:8001/createpoll")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuestion(data.questions[0].question);
        const choicedata = JSON.parse(data.questions[0].choices);
        setOptions(choicedata);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(question, options);

  return (
    <React.Fragment>
      <SearchAppBar />
      <StickyHeadTable />
      <Container maxWidth="md" sx={{ backgroundColor: "whitesmoke" }}>
      
        
        
      </Container>
    </React.Fragment>
  );
}

export default QuestionWithOptions;
