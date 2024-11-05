import React from 'react';
import classes from "./Modal.module.scss"
import Input from "../Input/Input"
import Buttons from "../Buttons/Buttons";

const Modal = ({children, handleShow, name, handleInput}) => {
    return (
        <div>
            <div className={classes.wrapper}/>
            <div className={classes.content}>
                <Buttons action={() => handleShow(name)} textValue={"close"}/>
                {/*<button onClick={() => handleShow(name)}>close</button>*/}
                {/*<input type="text" onChange={handleInput}/>*/}
                <Input placeholder={"write text"} action={handleInput}/>
                {children}
            </div>
        </div>
    );
};

export default Modal;