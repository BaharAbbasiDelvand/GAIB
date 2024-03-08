import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';
import bg from '../../Backgrounds/bg3.png';
import {TextField, Button} from '@mui/material';
const Register = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [repo, setRepo] = useState('');
    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
    const [confirm, setConfirm] = useState('');


    const handleUser = (e) => {
    setUser(e.target.value);
};
    const handlePass = (e) => {
    setPass(e.target.value);
};
const handleGitRepo = (e) => {
    setRepo(e.target.value);
};
const handleAccessToken = (e) => {
    setToken(e.target.value);
};
const handleEmail = (e) => {
    setEmail(e.target.value);
};
const handleConfirmation = (e) => {
    setConfirm(e.target.value);
};
const nav = useNavigate();

    const handleNav = () => {
    console.log("clicked");
    nav("../");
}
const handleLogin = () => {
    console.log("clicked");
    nav("../login");
}
    return (
        <div style={{ border: '2px solid purple', width: '100%', height: '100vh', display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: "center", backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '' }}>
        <h2 className='loglog'>Registration:</h2>
    <TextField
        required
        sx={{ marginLeft: 'auto' ,m: 1, width: "600px", backgroundColor: "white", borderRadius: "12px" }}
        className="users"
        id="outlined-required"
        value={user}
        placeholder="Enter Username"
        label="Username"
        onChange={handleUser}
        />
        <TextField
        id="outlined-password-input"
        sx={{ m: 1, width: "600px", backgroundColor: "white", borderRadius: "12px" }}
            className='password'
            label="Password"
            type="password"
            autoComplete="current-password"
            value={pass}
            placeholder="Enter Password"
            onChange={handlePass}
        />
        <TextField
        id="outlined-password-input"
        sx={{ m: 1, width: "600px", backgroundColor: "white", borderRadius: "12px" }}
            className='confpass'
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            value={confirm}
            placeholder="Confirm Password"
            onChange={handleConfirmation}
        />
        <TextField
        required
        sx={{ m: 1, width: "600px", backgroundColor: "white", borderRadius: "12px" }}
        className="email"
        id="outlined-required"
        value={email}
        placeholder="Enter Email"
        label="Email"
        onChange={handleEmail}
        />
        <TextField
        required
        sx={{ m: 1, width: "600px", backgroundColor: "white", borderRadius: "12px" }}
        className="gitrepo"
        id="outlined-required"
        value={repo}
        placeholder="Enter GitHub Repo"
        label="GitHub Repo"
        onChange={handleGitRepo}
        /><TextField
        required
        sx={{ m: 1, width: "600px", backgroundColor: "white", borderRadius: "12px" }}
        className="accesstoken"
        id="outlined-required"
        value={token}
        placeholder="Enter GitHub Access Token"
        label="GitHub Access Token"
        onChange={handleAccessToken}
        />
        
        <Button color="secondary" variant= "outlined" sx = {{marginTop: '5%'}} onClick={handleNav}>Register</Button>
        <Button color="primary" sx = {{marginTop: '3%'}} onClick={handleLogin}> <p>Already have an account?</p> Log in</Button>
    </div>
);
};

export default Register;
