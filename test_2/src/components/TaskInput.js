import React, {useState} from "react";

function TaskInput({addTask, clearAllTasks, tasks}) {
    const [taskText, setTaskText] = useState("");

    const handleAddTask = () => {
        addTask(taskText);
        setTaskText("");
    };

    return (
        <div className="task-input-container">
            <input
                type="text"
                className="task-input"
                placeholder="Enter a task"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />

            <button className={taskText.trim() === "" ? "add-button disabled" : "add-button"} onClick={handleAddTask}
                    disabled={taskText.trim() === ""}> Add
            </button>
            {tasks.length > 0 && (
                <button className="add-button" onClick={clearAllTasks}> Clear all </button>
            )} {/*кнопку стилизовать не получилось :_(*/}
        </div>
    );
}

export default TaskInput;
