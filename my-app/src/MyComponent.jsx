import React, { useState } from 'react';

function Header() {
  return (
    <header><h1>Welcome to Task App</h1></header>
  );
}

function Footer() {
  return (
    <>
    <footer className='realfooter'>
      <p>© 2024 Made by <a href="https://www.linkedin.com/in/yaakoubi-mohamed/" target="_blank">Mohamed Yaakoubi</a></p>
    </footer>
    <footer>ps: ngl stole the style from gpt only done the line-through</footer>
    </>
  );
}

function Main() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleTask() {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks); 
  }

  return (
    <div>
      <div className='div1'><label htmlFor="taskname">Task:</label>
      <input 
        type="text" 
        id="taskname" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
      />
      <button onClick={handleTask}>Add</button>
      </div>
      <div id="tasktoadd">
        <ol>
          {tasks.map((t, index) => (
            <li key={index}>
              {t} 
              <button onClick={() => deleteTask(index)}>Done</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export { Header, Footer, Main };
