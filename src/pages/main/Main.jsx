import React from 'react';
import './main.css';
import App from '../../App';
import Filtering from '../../components/filtering/Filtering';
import Nav from '../../components/documentation/Documentation';
import Input from '../../components/input/Input';
import Stats from '../stats/Stats';
import Giturl from '../../components/githuburl/Giturl';
import Upload from '../../components/upload/Upload';
import GitMain from '../../components/gitmain/Gitmain';
import DownloadButton from '../../components/download/Download';
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
    {/* <Filtering /> */}
    <div className='divider'>
        
    </div>
    {/* <Stats /> */}
    {/* <Nav /> */}
    </div> 

);
    }
export default MainPage;