import React from 'react';

const Buttons = ({textValue, action}) => {
    return (
        <div>
            <button onClick={action}>{textValue}</button>

        </div>
    );
};

export default Buttons;