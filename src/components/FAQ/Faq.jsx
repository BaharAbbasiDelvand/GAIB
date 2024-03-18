import React, { useState } from "react";
import "./faq.css";
import { useNavigate } from "react-router-dom"; 
import {TextField, Button} from '@mui/material';
const Faq = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        console.log("clicked");
        navigate("/");
    }

    return (

        <div className="back-button" style={{display: "flex" }}>
            <Button variant="outlined" onClick={handleBack}> Back</Button>
        </div>
    )};

export default Faq;
