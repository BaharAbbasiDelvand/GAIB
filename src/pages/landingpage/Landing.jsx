import React from "react";
import { useNavigate } from "react-router-dom";
import DownloadButton from "../../components/download/Download";
import './landing.css';
import Documentation from "../../components/documentation/Documentation";
import { Button} from '@mui/material';

const LandingPage =() => {
    const navigate = useNavigate()
    const handleRegister = () => {
        console.log("clicked");
        navigate("./register");
    }
    
    return(
        <div>
        <div className="landing-container">
            
            <div className="text-container">
                <h1 className="text-head">
                    GAIB: GenAI Testbot
                </h1>
                <h2 className="text">
                Revolutionize Your Code Testing Process
                </h2>
                <p className="text">Generate test cases effortlessly with GenAI Testbot. Sign up or log in to start optimizing your testing workflow. By having an account, you will be able to access the extension and view statistics for your generated test cases.</p>
                <div className="loginreglink">
                    <Button onClick={handleRegister} style={{cursor: "pointer", color:'#EFFCFF', backgroundColor:'#1976D2'}}> Get started </Button>
                </div>
                <p className="text">
                    Download the VSCode extension to seamlessly integrate test case generation into your development environment.
                </p>
                <div className="down">
                    <DownloadButton/>
                </div>
                <p className="text"> If you are curious about how certain components work, explore our comprehensive documentation to understand every aspect of our tool. </p>
                <div>
                    <Documentation/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LandingPage;
