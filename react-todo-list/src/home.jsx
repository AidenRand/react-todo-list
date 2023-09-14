import React, { useState, useRef, useReducer } from 'react';
import DelIcon from './assets/close-icon.png';
import CheckIcon from './assets/check-icon.png';
import './styling/home.scss';

function Task(todo) {
    this.todo = todo;
}

function Home() {
    const [tasks, setTasks] = useState([]);
    const [complete, setComplete] = useState(false);
    const inputRef = useRef();
    const checkBtnRef = useRef();

    const handleDelete = (index) => {
        w;
        const updatedTask = [...tasks];
        updatedTask.splice(index, 1);
        setTasks(updatedTask);
    };

    const handleComplete = (index) => {
        checkBtnRef.current.style.backgroundColor = 'red';
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

    return (
        <>
            <div id='input-container'>
                <input type='text' ref={inputRef} maxLength={80} />
                <button onClick={handleClick}>Add</button>
            </div>

            <div id='task-container'>
                {tasks.map((task, index) => (
                    <div
                        id={`task-div-${index}`}
                        className='task-div'
                        key={index}
                    >
                        <p>{task.todo}</p>
                        <button
                            id={`check-btn-${index}`}
                            className='check-button'
                            ref={checkBtnRef}
                            onClick={() => handleComplete(index)}
                        >
                            <img src={CheckIcon} alt='check-btn' />
                        </button>
                        <button
                            id={`delete-btn ${index}`}
                            className='delete-btn'
                            onClick={() => handleDelete(index)}
                        >
                            <img src={DelIcon} alt='delete-btn' />
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
