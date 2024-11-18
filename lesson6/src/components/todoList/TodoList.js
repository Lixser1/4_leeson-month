
import React, { useState } from 'react';
import Todo from '../todo/Todo';
import classes from './TodoList.module.scss';


const TodoList = ({
                      todoList,
                      handleDone,
                      handleDelete,
                      handleEdit}) => {
    const [currentId, setCurrentId] = useState(null)
    console.log(currentId,'currentId');
    return (
        <ul className={classes.ul}>
            {
                todoList.map(todo=> <Todo
                    key={todo.id}
                    todo={todo}
                    handleDone={handleDone}
                    handleDelete={handleDelete}
                    handleEdit={(updatedTodo) => {
                        handleEdit(updatedTodo)
                        setCurrentId(null)
                    }}
                    handleCancel = {()=> setCurrentId(null)}
                    setCurrentId={setCurrentId}
                    isEdit={currentId === todo.id}
                />)
            }
        </ul>
    );
};

export default TodoList;
