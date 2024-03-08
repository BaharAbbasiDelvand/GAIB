import React, { useState } from 'react';
import './chatbot.css';
import { useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import {TextField, Button} from '@mui/material';
function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const handleInputChange = (event) => {
    setInput(event.target.value);
    };
    const handleNavigate = () => {
        console.log("clicked");
        navigate("../");
    }
    const handleKeyDown = (event) => {
        if (event.code === "Enter") {
            const newMessage = { text: input, sender: 'user' };

            setMessages([...messages, newMessage]);
            setInput("");
            return;
        }
};
    const handleSendMessage = () => {
    if (input.trim() !== '') {
        const newMessage = { text: input, sender: 'user' };
        setMessages([...messages, newMessage]);
        setInput('');

        console.log('User:', input);
    }
    
    };

    return (
        <div>
            <Button variant="outlined" sx={{marginLeft:'2%', marginTop:'2%'}}onClick={handleNavigate} href="#outlined-buttons">
        Back to Main Menu
            </Button>
    <div className="chatbot">
    <div className="chatbot-messages">
        <div className='message-container'>
        {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender}`} style={{color:'black', backgroundColor:'gray', minHeight:'15%', overflowY:'auto'}}>
            {message.text}
        </div>
        ))}
    </div>
    </div>
    <div className="chatbot-input">
        <TextField
            sx={{ m: 1, width: "600px", backgroundColor: "white", borderRadius: "12px" }}
            className="chattext"
            id="outlined-required"
            value={input}
            placeholder="Enter Message"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
        />
<Button variant="contained" sx={{marginTop:'1.5%'}} onClick={handleSendMessage} endIcon={<SendIcon />} onKeyDown={handleSendMessage}>
    Send
</Button>        
</div>
    </div>
    </div>
    );
}

export default Chatbot;
