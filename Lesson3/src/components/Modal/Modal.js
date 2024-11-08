import React from 'react';
import classes from './Modal.module.scss';
import Input from '../input/Input';
import Button from '../button/Button';


const Modal = ({children, handleShow, name, handleInput, handleAdd}) => {
    return (
        <div>
            <div className={classes.wrapper}/>
            <div className={classes.content}>
                <Button name={'Закрыть'} action={()=>handleShow(name)}/>
                <Input placeholder={'введите текст'} action={handleInput}/>
                <Button name={'Добавить'} action={handleAdd}/>
                {children}
            </div>
        </div>
    );
};

export default Modal;