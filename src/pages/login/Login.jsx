
//imports needed for the file
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Snackbar, SnackbarContent, Alert } from "@mui/material";
import "./login.css";
import { sendLogin } from "../../apis/Auth";

const Login = () => {
    
    const [userData, setUserData] = useState({
        //initialization 
        email: "",
        password: "",
    });
    const handleBack = () => {
        console.log("clicked");
        navigate("/");
    }
    const [error, setError] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false); // State to control Snackbar visibility

    
    //creating a button that is diabled until the user satisfies every textbox, to protect the server from spamming the login request button
    const [disableButton, setDisableButton] = useState(true);
    //using navigate to route and link the pages
    const navigate = useNavigate();
    
    const handleLogin = () => {
        const promise = sendLogin({ userData });
        promise.then((result) => {
            //if login is successful, this takes the user to their main page, which is specific to them with their unique user ids
            if (result?.user_id) {
                navigate(`../main/${result.user_id}`);
            }
            else{
                setError('Invalid email or password.');
                setOpenSnackbar(true);
            }
        });
        setUserData({
            email: "",
            password: "",
        });
    };
    const handleSnackbarClose=()=>{
        setOpenSnackbar(false);
    }
    //nvigates to the register page once clicked
    const handleRegister = () => {
        console.log("clicked");
        navigate("../register");
    };
    //to make sure that the button stays disabled until all textfields are filled
    useEffect(() => {
        if (
            userData.email !== "" &&
            userData.password !== "" &&
            userData.confirm_password !== ""
        ) {
            setDisableButton(false);
            return;
        }
        setDisableButton(true);
    }, [userData]);
    //
    const handleInputChange = (event) => {
        const {
            target: { name, value },
        } = event;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <div> 
        <div className="back-button">
        <Button variant="outlined" sx={{color:'#EFFCFF', border:'1px solid #EFFCFF;'}} className="back-button" onClick={handleBack}> Back</Button>
        </div>
        <div className="background"
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h2 className="loginheader">Login</h2>
            <TextField
                required
                sx={{
                    m: 1,
                    width: "600px",
                    backgroundColor: "#EFFCFF",
                    color: '#EFFCFF',
                    borderRadius: "12px",
                }}
                className="user"
                id="outlined-required"
                value={userData.email}
                placeholder="Enter Email"
                label="Email"
                onChange={handleInputChange}
                name="email"
            />
            <TextField
                id="outlined-password-input"
                sx={{
                    m: 1,
                    width: "600px",
                    color: '#030637',
                    backgroundColor: "#EFFCFF",
                    borderRadius: "12px",
                }}
                className="pass"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={userData.password}
                placeholder="Enter Password"
                onChange={handleInputChange}
                name="password"
            />
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                style={{ zIndex: 9999 }}
            >
                <Alert severity="error">{error}</Alert>
                {/* <SnackbarContent sx={{color:'EFFCFF'}} message={error} /> */}
            </Snackbar>

            <Button
                disabled={disableButton}
                variant="contained"
                sx={{ marginTop: "3%", "&:disabled": {
                    backgroundColor: "#EFFCFF"
                }}}
                onClick={handleLogin}
            >
                Log in
            </Button>
            <Button
                
                sx={{ marginTop: "3%", color: 'primary' }}
                onClick={handleRegister}
            >
                Don't Have an Account yet? click here to Register
            </Button>
        </div>
        </div>
    );
};

export default Login;
