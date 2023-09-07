import React, { useState, useRef } from 'react';
import DelIcon from './assets/close-btn.png';
import './styling/home.scss';

function home() {
    const inputRef = useRef();

    const taskArr = [];

    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';

    const handleClick = () => {
        taskArr.push(inputRef.current.value);
        inputRef.current.value = '';

        if (taskArr[taskArr.length - 1] !== '') {
            const taskText = document.createElement('p');
            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = `<img src=${DelIcon} alt='close-btn' />`;
            deleteBtn.className = 'delete-btn';

            taskText.innerText = taskArr[taskArr.length - 1];
            document.body.appendChild(taskContainer);
            taskContainer.appendChild(taskText);
        }
    };

    return (
        <div id='home-container'>
            <input type='text' ref={inputRef} maxLength={60} />
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default home;
