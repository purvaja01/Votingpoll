// SignUp.js
import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { validation } from "../Utils/Userdatavalidations";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function SignUp() {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  console.log(name, email, password);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a data object to send to the validation function
    const userData = { name, email, password };

    // Use the Userdatavalidation class to perform validation
    const validationMessage = await validation.SignupValidation(userData);
    
    if (validationMessage === true){
      toast.success('User created successfully', {
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(() => {
        navigate("/")
      }, 1000);
      
    }else 
    {
      toast.error('Enter Correct Credentials', {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    // Check if validationMessage is a string (an error message)
    if (typeof validationMessage === "string") {
      setValidationMessage(validationMessage);
    } else {
      console.log("User data:", userData);
    }
  };

  return (
    <div className="Container">
   
      <h2 className="Signup-heading">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          size="small"
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "7px",
            width: "40%",
          }}
          onChange={handleNameChange}
        />
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          size="small"
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "7px",
            width: "40%",
          }}
          onChange={handleEmailChange}
        />
        <TextField
          id="filled-basic"
          label="Password"
          variant="filled"
          size="small"
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "7px",
            width: "40%",
          }}
          onChange={handlePasswordChange}
        />
        <br />

        <Button
          variant="contained"
          size="medium"
          sx={{
            backgroundColor: "#19015B",
            display: "flex",
            flexDirection: "column",
            margin: "7px",
            width: "40%",
          }}
          onClick={handleSubmit}
        >
          Sign In
        </Button>
        <p>
          <Link to="/" className="Signup-change">
            Already have an account?
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
