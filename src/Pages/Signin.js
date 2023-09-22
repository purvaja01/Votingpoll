// SignIn.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import userloginvalidation from "../Utils/Userloginvalidation";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [t, setT] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (email.endsWith("@jmangroup.com")) {
      setT("");
    } else {
      setT("error");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlelogin = async (e) => {
    e.preventDefault();

    // Prepare the data to send to the server
    const data = {
      email,
      password,
    };
    const signinvalidation = await userloginvalidation.loginValidation(data);
    if (signinvalidation === "Login Successful.") {
      toast.success("Login successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(() => {
        navigate("/Dashboard");
      }, 1000);
    } else {
      toast.error("Enter Correct Credentials", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="Container">
      <h2 className="Signin-heading">Sign In</h2>
      <form onSubmit={handlelogin}>
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          size="small"
          onChange={handleEmailChange}
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "7px",
            width: "40%",
          }}
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
          onClick={handlelogin}
        >
          Sign In
        </Button>
        <p>
          <Link to="/SignUp" className="Signin-change">
            Don't have an account?
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
