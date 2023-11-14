import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Filtering from './components/filtering/Filtering'
import Nav from './components/navbar/Nav';
import Input from './components/input/Input'
import reportWebVitals from './reportWebVitals';
import Stats from './components/stats/Stats'
import Giturl from './components/githuburl/Giturl'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Nav />
    <Input />
    <Filtering />
    <Stats />
    <Giturl />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
