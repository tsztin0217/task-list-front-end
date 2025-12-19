import React, { useState } from 'react';
import PropTypes from 'prop-types';


const NewTaskForm = ({ onAddTask }) => {
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const handleNewTaskChange = (event) => {
        setNewTaskTitle(event.target.value);
    };

    const handleAddTask = (event) => {
        event.preventDefault();

        const trimmedTitle = newTaskTitle.trim();
        if (!trimmedTitle) {          // if the title is empty, do not submit form
            return;
        }

        const newTask = {
            title: trimmedTitle,
            description: 'Default description from frontend'// hardcode description here for now
        };
        onAddTask(newTask);
        setNewTaskTitle('');
    };

    return(

        <form onSubmit={handleAddTask}>
            <label htmlFor="new-task-title">New Task:</label>
            <input
                type="text"
                id="new-task-title"
                name="new-task-title"
                value={newTaskTitle}
                onChange={handleNewTaskChange}
            />
            <button type="submit" className="button">Add Task</button>
        </form>
    );
};

NewTaskForm.propTypes = {
    onAddTask: PropTypes.func.isRequired,
};

export default NewTaskForm;