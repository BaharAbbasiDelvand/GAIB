import React from "react";
import { Link } from "react-router-dom";
import './nav.css';
const Nav = () => {
    return (
    <div className="navbar">
      <a href="#howItWorks" className="tutorial">How It Works</a>
      <a href="#about" className="about">About</a>
      <a href="#privacy" className="privacy">Privacy Policy</a>
      <a href="#chat" className="chat">Assistant Chat</a>
    </div>
);
};
export default Nav

