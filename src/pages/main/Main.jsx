import React from 'react';
import './main.css';
import App from '../../App';
import Filtering from '../../components/filtering/Filtering';
import Nav from '../../components/navbar/Nav';
import Input from '../../components/input/Input';
import Stats from '../stats/Stats';
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
    <a href="#" className='reglog' onClick={handleNavigate} style={{color: "white", cursor: "pointer"}}>Click Here to Login or Register</a>
    <Upload />
    <Input />
    <Giturl />
    {/* <Stats /> */}
    <Nav />
    </div> 

);
    }
export default MainPage;