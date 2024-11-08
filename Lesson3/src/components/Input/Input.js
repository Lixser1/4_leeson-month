import React from 'react';


const Input = ({type="text", placeholder, action}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={action}
        />
    );
};

export default Input;