import React, { useState, useRef, useReducer } from 'react';
import DelIcon from './assets/close-btn.png';
import './styling/home.scss';

function Task(todo) {
    this.todo = todo;
}

function home() {
    const [tasks, setTasks] = useState([]);
    const inputRef = useRef();

    const handleDelete = (index) => {
        const updatedTask = [...tasks];
        updatedTask.splice(index, 1);
        setTasks(updatedTask);
    };

    const handleClick = () => {
        const todo = inputRef.current.value;
        const newTask = new Task(todo);
        setTasks([...tasks, newTask]);
        inputRef.current.value = '';
    };

    return (
        <div>
            <div id='input-container'>
                <input type='text' ref={inputRef} maxLength={40} />
                <button onClick={handleClick}>Add</button>
            </div>

            <div id='task-container'>
                {tasks.map((task, index) => (
                    <div id='task-div' key={index}>
                        <p>{task.todo}</p>
                        <button
                            id='delete-btn'
                            onClick={() => handleDelete(index)}
                        >
                            <img src={DelIcon} alt='delete-btn' />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default home;
