import React, {useState} from 'react';
import classes from "./CountModule.scss";


const Count = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if(count <= 0) return
        setCount(count - 1);
    }
    return (
        <div className={classes.count}>
            {count}
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};

export default Count;