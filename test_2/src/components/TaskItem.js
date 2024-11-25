import React, { useState } from "react";

function TaskItem({ task, deleteTask, updateTask, toggleEdit }) {
    const [editedText, setEditedText] = useState(task.text);

    const handleSave = () => {
        updateTask(task.id, editedText);
    };

    const handleCancel = () => {
        toggleEdit(task.id);
        setEditedText(task.text);
    };

    return (
        <div className="task-input-container">
            {task.isEditing ? (
                <>
                    <input
                        type="text"
                        className="task-input"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                    />
                    <button className="add-button" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button className="add-button" onClick={handleSave}>
                        Save
                    </button>

                </>
            ) : (
                <>
                    <span className="task-input">{task.text}</span>
                    <button className="add-button" onClick={() => toggleEdit(task.id)}>
                        ✏️
                    </button>
                    <button className="add-button" onClick={() => deleteTask(task.id)}>
                        🗑️
                    </button>
                </>
            )}
        </div>
    );
}

export default TaskItem;

