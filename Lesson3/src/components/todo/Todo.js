import React from 'react';
import classes from './Todo.module.scss';
import Button from '../button/Button';


const Todo = ({
                  todo,
                  handleDone,
                  handleDelete,
              }) => {
    return (
        <li className={`${classes.li} ${todo.completed ? classes.completed : ''}`} >
            <div className={classes.info}>
                <p>id: {todo.id}</p>
                <p>title: {todo.title}</p>
            </div>
            <div className={classes.btns}>
                <Button name={'Edit'} action={() => {
                }}/>
                <Button name={'Done'} action={() => handleDone(todo.id)}/>
                <Button name={'Delete'} action={() => {
                    handleDelete(todo.id);
                }}/>
            </div>
        </li>
    );
};

export default Todo;