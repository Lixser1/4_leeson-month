import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, updateTask, toggleEdit }) {
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                    toggleEdit={toggleEdit}
                />
            ))}
        </div>
    );
}

export default TaskList;
