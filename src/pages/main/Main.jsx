import React from 'react';
// import '../index.css';
import App from '../../App';
import Filtering from '../../components/filtering/Filtering';
import Nav from '../../components/navbar/Nav';
import Input from '../../components/input/Input';
import Stats from '../../components/stats/Stats';
import Giturl from '../../components/githuburl/Giturl';
import Upload from '../../components/upload/Upload';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        console.log("clicked");
        navigate("./login");
    }

    return (
    <div>
    <App />
    <Filtering />
    <Upload />
    <Input />
    <Giturl />
    <a onClick={handleNavigate} style={{color: "white", cursor: "pointer"}}>Click here to navigate</a>
    <Stats />
    <Nav />
    </div> 

);
    }
export default MainPage;