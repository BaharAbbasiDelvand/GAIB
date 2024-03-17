import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import "./login.css";
import background from "../../Backgrounds/bg2.png";
import { sendLogin } from "../../apis/Auth";

const Login = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const [disableButton, setDisableButton] = useState(true);
    const navigate = useNavigate();

    const handleLogin = () => {
        const promise = sendLogin({ userData });
        promise.then((result) => {
            if (result?.user_id) {
                navigate(`../main/${result.user_id}`);
            }
        });
        setUserData({
            email: "",
            password: "",
        });
    };
    const handleRegister = () => {
        console.log("clicked");
        navigate("../register");
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

    const handleInputChange = (event) => {
        const {
            target: { name, value },
        } = event;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "",
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h2 className="loglog">Login</h2>
            <TextField
                required
                sx={{
                    m: 1,
                    width: "600px",
                    backgroundColor: "white",
                    borderRadius: "12px",
                }}
                className="user"
                id="outlined-required"
                value={userData.email}
                placeholder="Enter Username"
                label="Username"
                onChange={handleInputChange}
                name="email"
            />
            <TextField
                id="outlined-password-input"
                sx={{
                    m: 1,
                    width: "600px",
                    backgroundColor: "white",
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
            <Button
                disabled={disableButton}
                variant="contained"
                sx={{ marginTop: "3%" }}
                onClick={handleLogin}
            >
                Log in
            </Button>
            <Button
                variant="outlined"
                sx={{ marginTop: "3%" }}
                onClick={handleRegister}
            >
                Don't Have an Account yet? click here to Register
            </Button>
            {/* <a onClick={handleNavigate} style={{color: "blue", cursor: "pointer"}}>Click here to navigate</a> */}
        </div>
    );
};

export default Login;
