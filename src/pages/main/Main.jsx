import React, { useEffect } from "react";
import "./main.css";
import App from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import { authenticateUser } from "../../apis/Auth";

const MainPage = () => {
    const navigate = useNavigate();
    const { user_id } = useParams();

    const handleNavigate = () => {
        console.log("clicked");
        navigate("./login");
    };

    useEffect(() => {
        const promise = authenticateUser({ user_id });
        promise.then((result) => {
            if (result?.email) {
                return
            }
            navigate("../../");
        });
    }, [user_id]);

    return (
        <div>
            <App />
            {/* <Filtering /> */}
            <div className="divider"></div>
            {/* <Stats /> */}
            {/* <Nav /> */}
        </div>
    );
};
export default MainPage;
