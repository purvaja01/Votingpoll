import "./App.css";
import React from "react";
import PollPage from "./Components/CreatepoleC"
import SignIn from "./Pages/Signin.js"
import SignUp from "./Pages/Signup.js";
import Dashboard from "./Pages/Dashboard";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Createpole" element={<PollPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
