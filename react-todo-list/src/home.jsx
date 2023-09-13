import React, { useState, useRef, useReducer } from 'react';
import DelIcon from './assets/close-icon.png';
import CheckIcon from './assets/check-icon.png';
import './styling/home.scss';

function Task(todo) {
    this.todo = todo;
}

function home() {
    const [tasks, setTasks] = useState([]);
    const [complete, setComplete] = useState(false);
    const inputRef = useRef();

    const handleDelete = (index) => {
        const updatedTask = [...tasks];
        updatedTask.splice(index, 1);
        setTasks(updatedTask);
    };

    const handleComplete = (index) => {
        console.log(index);
    };

    const handleClick = () => {
        if (inputRef.current.value !== '') {
            const todo = inputRef.current.value;
            const newTask = new Task(todo);
            setTasks([...tasks, newTask]);
            inputRef.current.value = '';
        } else {
            alert('Input cannot be empty');
        }
    };

    console.log([...tasks]);

    return (
        <>
            <div id='input-container'>
                <input type='text' ref={inputRef} maxLength={80} />
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
                        <button
                            id='check-btn'
                            onClick={() => handleComplete(index)}
                        >
                            <img src={CheckIcon} alt='check-btn' />
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default home;
