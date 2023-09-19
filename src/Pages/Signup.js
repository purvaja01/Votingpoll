// SignUp.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import TextField from "@mui/material/TextField";
import  Button  from '@mui/material/Button';
import Userdatavalidation from "../Utils/Userdatavalidations";

const Userobject = new Userdatavalidation()

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement your signup logic, such as sending a request to your backend API.
    // For this example, we'll just log the values to the console.
    SignupValidation({name:name,email:email, password:password});
  };

  return (
    <div className="Container">
      <h2 className='Signup-heading'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
      <TextField id="filled-basic" label="Name" variant="filled" size='small' sx={{ display: 'flex', flexDirection: 'column', margin: '7px' , width :'40%' }} onChange={handleNameChange}/>
      <TextField id="filled-basic" label="Email" variant="filled" size='small' sx={{ display: 'flex', flexDirection: 'column', margin: '7px' , width :'40%' }}  onChange={handleEmailChange}/>
      <TextField id="filled-basic" label="Password" variant="filled" size='small' sx={{ display: 'flex', flexDirection: 'column', margin: '7px' , width :'40%' }} onChange={handlePasswordChange} />
        <br/>
        
        <Button  variant="contained" size="medium" sx={{backgroundColor:"#19015B", display: 'flex', flexDirection: 'column', margin: '7px' , width :'40%' }} onClick={handleSubmit}>Sign In</Button>
          <p>
            <Link to="/" className='Signup-change'>Already have an account?</Link>
          </p>
        
      </form>
    </div>
  );
}

export default SignUp;
