
import React from 'react';
import './Input.css';

const Input = ({ placeholder, onChange }) => {
    return (
        <input
            className="input"
            type="text"
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default Input;

