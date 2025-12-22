import { useState } from 'react';
import PropTypes from 'prop-types';


const kDefaultFormState = {
  title: '',
  description: '',
};

const NewTaskForm = ({ onAddTask }) => {
  const [formData, setFormData] = useState(kDefaultFormState);

  const handleChange = (event) => {
      const inputValue = event.target.value;
      const inputName = event.target.name;

      setFormData((prevFormData) => {
          return {
              ...prevFormData,
              [inputName]: inputValue,
          };
      });
  };

  const handleAddTask = (event) => {
      event.preventDefault();

      const trimmedTitle = formData.title.trim();
      const trimmedDescription = formData.description.trim();

      if (!trimmedTitle || !trimmedDescription) {
          return;
      }

      const newTask = {
          title: trimmedTitle,
          description: trimmedDescription,
      };

      onAddTask(newTask);
      setFormData(kDefaultFormState);
  };

  return (
      <form onSubmit={handleAddTask}>
          <label htmlFor="new-task-title">New Task Title:</label>
          <input
              type="text"
              id="new-task-title"
              name="title"
              value={formData.title}
              onChange={handleChange}
          />

          <label htmlFor="new-task-description">New Task Description:</label>
          <input
              type="text"
              id="new-task-description"
              name="description"
              value={formData.description}
              onChange={handleChange}
          />

          <button type="submit" className="button">Add Task</button>
      </form>
  );
};

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default NewTaskForm;