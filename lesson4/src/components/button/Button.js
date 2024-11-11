import React from 'react';
import classes from './Button.module.css';

const Button = ({name, color, action}) => {
    return (
     <button className={`${classes.btn} ${classes[ color ]}`} onClick={action}>{name}</button>
    );
};

export default Button;

// const user= {
//     name: "Bakyt",
//     age: 18,
// }
//
// console.log(user.name);
// console.log(user[name]);
//
// console.log('Ваше имя', name, 'dfi djphfcn', age);
//
// console.log(`Ваше имя ${name}, ваш возраст ${age}`);