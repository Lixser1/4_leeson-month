import React, { useState } from 'react';
import classes from './Count.module.scss';


const Count = () => {
    const [ count, setCount ] = useState(0);

    const increment = () => {
        setCount(prevState => prevState + 1);
    };
    const decrement = () => {
        if (count<=0 ) return
        setCount(prevState => prevState - 1);
    };

    return (
        <div className={classes.count}>
            {count}
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};

export default Count;