import React from 'react';

const Example = ({children, name}) => {
    return (
        <div>
            {name}
            {children}
        </div>
    );
};

export default Example;