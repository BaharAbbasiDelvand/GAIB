import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import bg from "../../Backgrounds/bg3.png";
import { TextField, Button } from "@mui/material";
import { useEffect } from "react";
import { sendRegister } from "../../apis/Auth";
const Register = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "", 
        confirm_password: "",
    });
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
        });
        setUserData({
            email: "",
            password: "",
            confirm_password: "",
        });
    };
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
        <div
            style={{
                // border: "2px solid purple",
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // backgroundImage: `url(${bg})`,
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                backgroundColor: "#030637",
            }}
        >
            <h2 className="loglog">Registration:</h2>
            <TextField
                required
                sx={{
                    m: 1,
                    width: "600px",
                    backgroundColor: "white",
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
                    backgroundColor: "white",
                    color: "white",
                    borderRadius: "12px",
                }}
                className="password"
                label="Password"
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
                    backgroundColor: "white",
                    color: "white",
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

            <Button
                color="secondary"
                variant="outlined"
                sx={{ marginTop: "5%" }}
                onClick={handleRegister}
                disabled={disableButton}
            >
                Register
            </Button>
            <Button
                color="primary"
                sx={{ marginTop: "3%" }}
                onClick={handleLogin}
            >
                {" "}
                <p>Already have an account?</p> Log in
            </Button>
        </div>
    );
};

export default Register;
