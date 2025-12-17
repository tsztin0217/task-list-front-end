
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ taskId, title, isComplete, onCompleteTask, onDeleteTask }) => {
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => onCompleteTask(taskId)}
      >
        {title}
      </button>
      <button
        className="tasks__item__remove button"
        onClick={() => onDeleteTask(taskId)}
      >
          X
      </button>
    </li>
  );
};

Task.propTypes = {
  taskId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onCompleteTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
};

export default Task;
