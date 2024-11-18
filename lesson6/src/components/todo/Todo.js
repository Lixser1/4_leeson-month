import React, { useState } from 'react';
import classes from './Todo.module.scss';
import Button from '../button/Button';
import { findAllByDisplayValue } from '@testing-library/react';


const Todo = ({
                  todo,
                  handleDone,
                  handleDelete,
                  handleEdit,
                  setCurrentId,
                  isEdit
              }) => {
    const [ inputValue, setInputValue ] = useState(todo.title);
    return (
        <>

            <li className={`${classes.li} ${todo.completed ? classes.completed : ''}`}>
                <div className={classes.info}>
                    <p>id: {todo.id}</p>
                    <p>title: {todo.title}</p>
                    {!todo.completed && <p>completed: {todo.completed ? 'true' : 'false'}</p>}
                </div>
                <div className={classes.btns}>
                    <Button name={'Edit'} action={() => setCurrentId(todo.id)} color={'primary'}/>
                    <Button name={'Done'} action={() => handleDone(todo.id)} color={'secondary'}/>
                    <Button name={'Delete'} action={() => {
                        handleDelete(todo.id);
                    }} color={'error'}/>
                </div>
            </li>
            {
                isEdit && <div className={classes.li}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}/>
                    <Button name={'Save'} color={'primary'} action={() => {
                        handleEdit({
                            ...todo,
                            title: inputValue
                        });
                        setCurrentId(null);
                    }}/>
                    <Button name={'Cancel'} color={'error'} action={() => {
                        setCurrentId(null);
                    }}/>
                </div>
            }

        </>
    );
};

export default Todo;