import React from "react";
import { useNavigate } from "react-router-dom";
import DownloadButton from "../../components/download/Download";
import './landing.css';
import Documentation from "../../components/documentation/Documentation";
import {TextField, Button} from '@mui/material';
import Faq from "../../components/FAQ/Faq";
const LandingPage =() => {
    
    const navigate = useNavigate()
    const handleRegister = () => {
        console.log("clicked");
        navigate("./register");
    }
    // const handleFaq = () => {
    //     console.log("clicked");
    //     navigate("./FAQ");
    // }
    return(
        <div className="landing-container">
            <h1 className="text">
                Welcome to GenAI's Testbot!
            </h1>
            <h3 className="text">
                We help generate testcases for your code!
            </h3>
            <p className="text">Click here to login to your account, or register to be able to --------------------------------------------------------------------------------------------!</p>
            <div className="loginreglink">
            <Button onClick={handleRegister} style={{cursor: "pointer", color:'#EFFCFF', backgroundColor:'#1976D2'}}> Get started! </Button>
            </div>
            <p className="text">
            You can click here to download the VSCode extension. By downloading the extension, you can run and generate the testcases all within your VSCode environment. 
            </p>
            <div className="down" style={{'&:hover': { backgroundColor: '#D40000', borderColor: '#030637', boxShadow: 'none',},}}> 
                <DownloadButton/>
            </div>
            <p> If you have any questions on how certain </p>
            <div>
                <Documentation/>
            </div>

            
            {/* <div className="Faq-button"> 
            <Button onClick={handleFaq} style={{cursor: "pointer", color:'white', backgroundColor:'#FB8500', marginTop:'10%'}}> FAQs </Button>
            </div> */}
            
        </div>
    )
}

export default LandingPage;