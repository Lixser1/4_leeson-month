import React from 'react';

const List = ({ tasks}) => {

    return (
        <ul>
            {tasks.map((task) => (
                <li>{task.id} {task.title} {task.complete}</li>
            ))}
        </ul>
    );
};

export default List;
