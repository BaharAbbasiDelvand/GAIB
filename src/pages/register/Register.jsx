import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { TextField, Button, Snackbar, Alert, SnackbarContent } from "@mui/material";
import { useEffect } from "react";
import { sendRegister } from "../../apis/Auth";

const Register = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        console.log("clicked");
        navigate("/");
    }
    const [userData, setUserData] = useState({
        email: "",
        password: "", 
        confirm_password: "",
    });
    const [openSnackbar, setOpenSnackbar] = useState(false); // State to control Snackbar visibility

    const [error, setError] = useState(null);

    const [disableButton, setDisableButton] = useState(true);

    const handleInputChange = (event) => {
        const {
            target: { name, value },
        } = event;
        setUserData({ ...userData, [name]: value });
    };
    const nav = useNavigate();

    const handleRegister = () => {
        const promise = sendRegister({ userData });
        promise.then((result) => {
            if (result?.user_id) {
                nav(`../main/${result.user_id}`);
            }
            else{
                setError('The user already exists, the passwords do not match, or an incorrect form of email address was input.');
                setOpenSnackbar(true);
            }
        });
        setUserData({
            email: "",
            password: "",
            confirm_password: "",
        });
    };
    const handleSnackbarClose=()=>{
        setOpenSnackbar(false);
    }
    const handleLogin = () => {
        console.log("clicked");
        nav("../login");
    };

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

    return (
        <div className="all">
            <div className="back-button">
        <Button variant="outlined" sx={{color:'#EFFCFF', border:'1px solid #EFFCFF;'}} className="back-button" onClick={handleBack}> Back</Button>
        </div>
        <div className="container"
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                
            }}
        >
        
            <h2 className="registerheader">Registration:</h2>
            <TextField
                required
                sx={{
                    m: 1,
                    width: "600px",
                    backgroundColor: "#EFFCFF",
                    borderRadius: "12px",
                }}
                className="email"
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
                    backgroundColor: "#EFFCFF",
                    color: "white",
                    borderRadius: "12px",
                }}
                className="password"
                label="Password"
                // InputLabelProps={{style:{color:'white'}}}
                type="password"
                autoComplete="current-password"
                value={userData.password}
                placeholder="Enter Password"
                onChange={handleInputChange}
                name="password"
            />
            <TextField
                id="outlined-password-input"
                sx={{
                    m: 1,
                    width: "600px",
                    backgroundColor: "#EFFCFF",
                    color: "#EFFCFF",
                    borderRadius: "12px",
                }}
                className="confirm-password"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                value={userData.confirm_password}
                placeholder="Confirm Password"
                onChange={handleInputChange}
                name="confirm_password"
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
                variant="outlined"
                
                disabled={disableButton}
                sx={{ marginTop: "5%", "&:disabled": {
                    backgroundColor: "#EFFCFF"
                }}}
                onClick={handleRegister}
            >
                Register
            </Button>
            <Button
                
                color="primary"
                sx={{ marginTop: "3%" }}
                onClick={handleLogin}
            >
                {" "}
                <p>Already have an account?  Log in</p>
            </Button>
        </div>
        </div>
    );
};

export default Register;
