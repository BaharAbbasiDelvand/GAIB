import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {TextField, Button} from '@mui/material';
const Register = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleU = (e) => {
    setUser(e.target.value);
};
    const handleP = (e) => {
    setPass(e.target.value);
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
    <div>
        <h2>Login</h2>
    <TextField
        required
        sx={{ m: 1, width: "600px", backgroundColor: "white", borderRadius: "12px" }}
        className="users"
        id="outlined-required"
        value={user}
        placeholder="Enter Username"
        label="Required"
        onChange={handleU}
        />
        <TextField
        id="outlined-password-input"
        sx={{ m: 1, width: "600px", backgroundColor: "white", borderRadius: "12px" }}
            className='passs'
            label="Password"
            type="password"
            autoComplete="current-password"
            value={pass}
            placeholder="Enter Password"
            onChange={handleP}
        />
        <TextField
        id="outlined-password-input"
        sx={{ m: 1, width: "600px", backgroundColor: "white", borderRadius: "12px" }}
            className='passs'
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            value={pass}
            placeholder="Confirm Password"
            onChange={handleP}
        />
        <Button variant="outlined" onClick={handleLogin}>Register</Button>
        <Button color="secondary" onClick={handleNav}>Already have an account? Log in</Button>
    </div>
);
};

export default Register;
