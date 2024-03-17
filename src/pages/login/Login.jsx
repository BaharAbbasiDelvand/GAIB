import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {TextField, Button} from '@mui/material';
import "./login.css"
import background from '../../Backgrounds/bg2.png'
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
    navigate("../main");
}
const handleRegister = () => {
  console.log("clicked");
  navigate("../register");
}
  return (
    <div style={{ width: '100%', height: '100vh', display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: "center", backgroundColor: '',backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

      <h2 className='loglog'>Login</h2>
      <TextField
          required
          sx={{ m: 1, width: "600px", backgroundColor: "white", borderRadius: "12px" }}
          className="user"
          id="outlined-required"
          value={username}
          placeholder="Enter Username"
          label="Username"
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
      <Button variant="outlined" sx = {{marginTop: '3%'}} onClick={handleNavigate}>Log in</Button>
      <Button variant="outlined" sx = {{marginTop: '3%'}} onClick={handleRegister}>Don't Have an Account yet? click here to Register</Button>
      {/* <a onClick={handleNavigate} style={{color: "blue", cursor: "pointer"}}>Click here to navigate</a> */}
    </div>
  );
};

export default Login;
