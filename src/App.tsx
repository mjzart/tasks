import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
      <h1>Tasks Manager</h1>
      <TaskForm />
      <Tasks />
    </div>
  );
}

export default App;
