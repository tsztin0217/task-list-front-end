import { useEffect, useState } from 'react';
import TaskList from './components/TaskList.jsx';
import './App.css';
import axios from 'axios';


const kbaseURL = 'http://localhost:5000';

const getAllTasksAPI = () => {
  return axios.get(`${kbaseURL}/tasks`)
    .then(response => response.data)
    .catch(error => console.log(error));
};


const convertFromAPI = (apiTask) => {
  const newTask = {
    ...apiTask,
    goal: apiTask.goal ? apiTask.goal : 'Unknown',
    goalId: apiTask.goal_id ? apiTask.goal_id : null,
    isComplete: apiTask.is_complete
  };

  delete newTask.goal_id;
  delete newTask.is_complete;

  return newTask;
};

const updateTaskCompleteStatusAPI = (taskId, isComplete) => {
  const endpoint = isComplete ? 'mark_complete' : 'mark_incomplete';
  return axios.patch(`${kbaseURL}/tasks/${taskId}/${endpoint}`)
    .catch(error => console.log(error));
};

const removeTaskAPI = taskId => {
  return axios.delete(`${kbaseURL}/tasks/${taskId}`)
    .catch(error => console.log(error));
};

const App = () => {
  const [taskData, setTaskData] = useState([]);

  const getAllTasks = () => {
    return getAllTasksAPI()
      .then(tasks => {
        const newTasks = tasks.map(convertFromAPI);
        setTaskData(newTasks);
      });
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  const toggleComplete = (taskId) => {
    const task = taskData.find(task => task.id === taskId);

    return updateTaskCompleteStatusAPI(taskId, !task.isComplete)
      .then(() => {
        setTaskData(taskData => {
          return taskData.map(task => {
            if (task.id === taskId) {
              return { ...task, isComplete: !task.isComplete };
            }
            return task;
          });
        });
      });
  };

  const handleDelete = (taskId) => {
    return removeTaskAPI(taskId)
      .then(() => {
        return setTaskData(taskData => {
          return taskData.filter(task => task.id !== taskId);
        });
      });
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{
          <TaskList
            tasks={taskData}
            onCompleteTask={toggleComplete}
            onDeleteTask={handleDelete}
          />}</div>
      </main>
    </div>
  );
};

export default App;
