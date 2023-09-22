import React, { useState } from "react";

function PollPage() {
  const [polls, setPolls] = useState([]);
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState([]);

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

  const handleAddPoll = (e) => {
    e.preventDefault();
    if (question.trim() !== "" && choices.length >= 2) {
      const newPoll = {
        question,
        choices,
      };
      setPolls([...polls, newPoll]);
      setQuestion("");
      setChoices([]);
    }
  };

  return (
    <div>
      <h2>Create a Poll</h2>
      <form onSubmit={handleAddPoll}>
        <input
          type="text"
          placeholder="Poll Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        {choices.map((choice, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`Choice ${index + 1}`}
              value={choice}
              onChange={(e) => handleChoiceChange(e, index)}
            />
            <button type="button" onClick={() => removeChoice(index)}>
              Remove Choice
            </button>
          </div>
        ))}
        <button type="button" onClick={addChoice}>
          Add Choice
        </button>
        <button type="submit">Create Poll</button>
      </form>
    </div>
  );
}

export default PollPage;


// import React, { useState } from "react";

// function PollPage() {
//   const [polls, setPolls] = useState([]);
//   const [question, setQuestion] = useState("");
//   const [choices, setChoices] = useState([]);

//   const handleChoiceChange = (e, index) => {
//     const updatedChoices = [...choices]; // Create a copy of the choices array
//     updatedChoices[index] = e.target.value; // Update the choice at the specified index
//     setChoices(updatedChoices); // Update the state with the new choices
//   };

//   const addChoice = () => {
//     setChoices([...choices, ""]); // Add a new empty choice to the choices array
//   };

//   const handleAddPoll = (e) => {
//     e.preventDefault();
//     if (question.trim() !== "" && choices.length >= 2) {
//       const newPoll = {
//         question,
//         choices,
//       };
//       setPolls([...polls, newPoll]);
//       setQuestion("");
//       setChoices([]);
//     }
//   };

//   // Render the form
//   return (
//     <div>
//       <h2>Create a Poll</h2>
//       <form onSubmit={handleAddPoll}>
//         <input
//           type="text"
//           placeholder="Poll Question"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//         />
//         {choices.map((choice, index) => (
//           <input
//             key={index}
//             type="text"
//             placeholder={`Choice ${index + 1}`}
//             value={choice}
//             onChange={(e) => handleChoiceChange(e, index)}
//           />
//         ))}
//         <button type="button" onClick={addChoice}>
//           Add Choice
//         </button>
//         <button type="submit">Create Poll</button>
//       </form>
//     </div>
//   );
// }

// export default PollPage;
