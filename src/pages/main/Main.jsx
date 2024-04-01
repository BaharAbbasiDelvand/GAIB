import React, { useEffect, useState } from "react";
import "./main.css";
import App from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import { authenticateUser } from "../../apis/Auth";
import { getResult } from "../../apis/Result";
import Hiw from "../../components/how-it-works/hiw";
import { Button} from '@mui/material';

const MainPage = () => {
    const navigate = useNavigate();
    const { user_id } = useParams();
    const [result, setResult] = useState(null);
    const [firstRender, setFirstRender] = useState(false);


    const handleBack = () => {
        console.log("clicked");
        navigate("/");
    }
    
    useEffect(() => {
        const resultsPromise = getResult({ id: user_id });
        resultsPromise.then((result) => {
            console.log(result);
            setResult(result);
        });
        console.log("=====louisss====");
    }, [user_id]);

    const renderResult = () => {
        if (result && result !== null) {
            return (
                <div
                    className="results-section"
                    style={{ whiteSpace: "pre-line" }}
                >
                    <div className="top">
                    <div className="attribute-box">
                        <div className="attribute-section-top"><b>Accuracy</b> {result?.accuracy}</div>
                    </div>
                    <div className="attribute-box">
                        <div className="attribute-section-top"><b>Static Rating</b>{result?.static_rating}</div>
                    </div>
                    <div className="attribute-box">
                        <div className="attribute-section-top"><b>Coverage Rating</b> {result?.coverage_rating}</div>
                    </div>
                    </div>
                    <div className="attribute-section-coverage-report"><b>Missing Lines: </b>{result?.missing_lines}</div>

                    <div className="attribute-section-container">
                    <div className="attribute-section"><b>Static Report:</b>{result?.static_report}</div>
                    <div className="attribute-section"><b>Assertions:</b>{result?.assertion_results}</div>
                    </div>

                </div>
            );
        }
    };

    return (
        <div className="main-page">
            <App />
            <Button variant="outlined" sx={{color:'#EFFCFF', border:'1px solid #EFFCFF', position:'absolute', top:'30px'}} className="back-button" onClick={handleBack}> Back</Button>

            <div className="divider">{renderResult()}</div>
            <Hiw/>
    
        </div>
    );
};
export default MainPage;
