// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {TextField, Button} from '@mui/material';
import "./login.css"
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUser = (e) => {
    setUsername(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'yourusername' && password === 'yourpassword') {
    } else {
      alert('Invalid credentials');
    }
  };

  const handleNavigate = () => {
    console.log("clicked");
    navigate("../");
}
const handleRegister = () => {
  console.log("clicked");
  navigate("../register");
}
  return (
    <div>
      <h2>Login</h2>
      <TextField
          required
          sx={{ m: 1, width: "600px", backgroundColor: "white", borderRadius: "12px" }}
          className="user"
          id="outlined-required"
          value={username}
          placeholder="Enter Username"
          label="Required"
          onChange={handleUser}
        />
      <TextField
          id="outlined-password-input"
          sx={{ m: 1, width: "600px", backgroundColor: "white", borderRadius: "12px" }}
          className='pass'
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          placeholder="Enter Password"
          onChange={handlePass}
        />
      <Button variant="outlined" onClick={handleNavigate}>Log in</Button>
      <Button color="secondary" onClick={handleRegister}>Register</Button>
      {/* <a onClick={handleNavigate} style={{color: "blue", cursor: "pointer"}}>Click here to navigate</a> */}
    </div>
  );
};

export default Login;
