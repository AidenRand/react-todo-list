import React, { useState, useRef, useReducer, useMemo, createRef } from 'react';
import DelIcon from './assets/close-icon.png';
import CheckIcon from './assets/check-icon.png';
import './styling/home.scss';

function Home() {
    const [tasks, setTasks] = useState([]);
    const inputRef = useRef();
    const [active, setActive] = useState();
    const taskRef = useMemo(() => tasks.map(() => createRef()), [tasks]);

    const handleDelete = (index) => {
        const updatedTask = [...tasks];
        updatedTask.splice(index, 1);
        setTasks(updatedTask);
    };

    const handleComplete = (index) => {
        taskRef[index].current.style.textDecoration = 'none';
        setActive((active) => !active);

        console.log(active);

        if (active) {
            taskRef[index].current.style.textDecoration = 'line-through';
        } else {
            taskRef[index].current.style.textDecoration = 'none';
        }
    };

    const handleClick = () => {
        if (inputRef.current.value !== '') {
            const task = inputRef.current.value;
            setTasks([...tasks, task]);
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
                        <p ref={taskRef[index]}>{task}</p>
                        <button
                            className={`check-button`}
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
