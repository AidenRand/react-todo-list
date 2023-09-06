import React, { useState, useRef } from 'react';
import './styling/home.scss';

function home() {
    const inputRef = useRef();

    const taskArr = [];

    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';
    document.body.appendChild(taskContainer);

    const handleClick = () => {
        taskArr.push(inputRef.current.value);
        inputRef.current.value = '';

        if (taskArr[taskArr.length - 1] !== '') {
            const taskDiv = document.createElement('div');
            const taskText = document.createElement('p');
            taskDiv.className = 'task-div';

            taskText.innerText = taskArr[taskArr.length - 1];
            taskContainer.appendChild(taskDiv);
            taskDiv.appendChild(taskText);
            taskContainer.appendChild(taskDiv);
        }
    };

    return (
        <div id='home-container'>
            <input type='text' ref={inputRef} />
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default home;
