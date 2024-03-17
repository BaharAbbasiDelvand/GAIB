import React from "react";
import { useNavigate } from "react-router-dom";
import DownloadButton from "../../components/download/Download";
import './landing.css';
import Documentation from "../../components/documentation/Documentation";
import {TextField, Button} from '@mui/material';
import Faq from "../../components/FAQ/Faq";
const LandingPage =() => {
    
    const navigate = useNavigate()
    const handleNavigate = () => {
        console.log("clicked");
        navigate("./register");
    }
    return(
        <div className="landing-container">
            <h1 className="text">
                Welcome to GenAI's Testbot!
            </h1>
            <p className="text">
                What this testbot does is djhdkjhd
            </p>
            <p className="text">Click here to login to your account, or register to be able to --------------------------------------------------------------------------------------------!</p>
            <div className="loginreglink">
            <Button onClick={handleNavigate} style={{cursor: "pointer", color:'#EFFCFF', backgroundColor:'#1976D2'}}> Get started! </Button>
            </div>
            <p className="text">
            You can click here to download the extension! by downloading the extension, you can run and generate the testcases all in your VSCode environment!
            </p>
            <div className="down" > 
                <DownloadButton/>
            </div>
            <div>
                <Documentation/>
            </div>
            <div> 
                <Faq />
            </div>
            
        </div>
    )
}

export default LandingPage;