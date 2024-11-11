import React, {useState} from 'react';
import Todo from '../todo/Todo';
import classes from './TodoList.module.scss';



const TodoList = ({
                      todoList,
                      handleDone,
                      handleDelete,
                      handleEdit,
                  }) => {
    let [currentId, setCurrentId] = useState(null)
    console.log(currentId, 'currentId');

    return (
        <ul className={classes.ul}>
            {
                todoList.map(todo => <Todo
                    key={todo.id}
                    todo={todo}
                    handleDone={handleDone}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    setCurrentId={setCurrentId}
                    isEdit={currentId === todo.id}
                />)
            }
        </ul>
    );
};

export default TodoList;