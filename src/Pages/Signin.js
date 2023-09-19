// SignIn.js
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Signin.css';
import TextField from "@mui/material/TextField";
import  Button  from '@mui/material/Button';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [t,setT] = useState('')
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (email.endsWith("@jmangroup.com")){
        setT("");
    }
    else{
        setT("error");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement your sign-in logic, such as sending a request to your backend API.
    
    // For this example, we'll just log the values to the console.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='Container'>
      <h2 className='Signin-heading'>Sign In</h2>
      <form onSubmit={handleSubmit}>
        
          <TextField id="filled-basic" label="Email" variant="filled" size='small' error={!!t} onChange={handleEmailChange} sx={{ display: 'flex', flexDirection: 'column', margin: '7px' , width :'40%' }}/>
          
       
        
          <TextField id="filled-basic" label="Password" variant="filled" size='small' sx={{ display: 'flex', flexDirection: 'column', margin: '7px' , width :'40%' }} />
        <br/>
        
        <Button  variant="contained" size="medium" sx={{backgroundColor:"#19015B", display: 'flex', flexDirection: 'column', margin: '7px' , width :'40%' }}>Sign In</Button>
          <p>
            <Link to="/SignUp" className='Signin-change'>Don't have an account?</Link></p>
       
      </form>
    </div>
  );
}

export default SignIn;
