

import React, { useState} from 'react';

import './index.css';
import { MdDelete } from "react-icons/md"

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const handleTaskChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        if (task.trim() !== '') {
            setTodos([...todos, task]);
            setTask('');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    const handleToggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`todo-app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="header">
                <div className="top">
                    <h1>TodoBuddy</h1>
                </div>
                <div className="details">
                    <div className='greetings'>Hey, Buddy</div>
                    <div className='toggle'>
                        <label className="switch">
                            <input type="checkbox" checked={isDarkMode} onChange={handleToggleMode} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>

            </div>
            <div className="content">
                <div className="task-input">
                    <input type="text" value={task} onChange={handleTaskChange} placeholder="Enter task" />
                    <button className='add' onClick={handleAddTask}>Add Task</button>
                </div>

                <ul className=' list-wrapper'>
                    {todos.map((todo, index) => (
                        <li key={index} className='list'>

                            <div>{todo}</div>
                            <div className='list-foot'>

                                {/* not functioning yet */}
                                <div className="time">
                                    {/* <ReactTimeAgo date={date} locale='en-US' timeStyle="twitter"/> */}
                                   
                                </div>
                                <button onClick={() => handleDeleteTask(index)} className='delete'>
                                    <MdDelete />
                                </button>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoApp;
