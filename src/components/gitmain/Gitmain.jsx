import React, {useState} from "react";
import './gitmain.css';

const GitMain = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div style={{ display: 'inline-block' }}>
        <div
            style={{
            width: '30px',
            height: '30px',
            border: '1px solid black',
            borderRadius: '50%',
            textAlign: 'center',
            lineHeight: '30px',
            cursor: 'pointer',
            }}
            onClick={toggleDropdown}
        >
            +
        </div>
        {isOpen && (
            <div
            style={{
            border: '1px solid black',
            padding: '5px',
            marginTop: '5px',
            width: '100px',
            }}
        >
            Add new
            </div>
        )}
        </div>
    );
};
export default GitMain;