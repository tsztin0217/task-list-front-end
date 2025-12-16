import { useState } from 'react';
import TaskList from './components/TaskList.jsx';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [taskData, setTaskData] = useState(TASKS);
  
  const toggleComplete = (taskId) => {
    setTaskData(taskData.map(task => {
      if (task.id === taskId) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    }));
  };

  const handleDelete = (taskId) => {
    setTaskData(taskData.filter(task => task.id !== taskId));
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
