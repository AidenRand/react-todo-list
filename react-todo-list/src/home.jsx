import React, { useState, useRef } from 'react';
import DelIcon from './assets/close-btn.png';
import './styling/home.scss';

let taskArr = [];

function Task(todo) {
    this.todo = todo;
}

function home() {
    const inputRef = useRef();

    const [deleteTask, setDelete] = useState(false);

    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';
    document.body.appendChild(taskContainer);

    let taskDiv = document.querySelector('.task-div');

    const handleDel = () => {
        for (let i = 0; i < taskArr.length; i++) {
            taskContainer.remove(taskDiv);
            taskArr.splice(taskDiv, 1);
        }
    };

    console.log(deleteTask);

    const handleClick = () => {
        let todo = inputRef.current.value;
        let newTask = new Task(todo);
        taskArr.push(newTask);
        console.log(taskArr);
        inputRef.current.value = '';

        if (taskArr[taskArr.length - 1] !== '') {
            const taskDiv = document.createElement('div');
            taskDiv.className = 'task-div';

            const taskText = document.createElement('p');
            const deleteBtn = document.createElement('button');

            taskText.innerText = taskArr[taskArr.length - 1].todo;
            taskContainer.appendChild(taskDiv);
            taskDiv.appendChild(taskText);
            taskDiv.appendChild(deleteBtn);
            taskContainer.appendChild(taskDiv);

            deleteBtn.innerHTML = `<img src=${DelIcon} alt='delete-btn' />`;
            deleteBtn.className = 'delete-btn';
            deleteBtn.onclick = handleDel;
        }
    };
    return (
        <div id='home-container'>
            <input type='text' ref={inputRef} maxLength={40} />
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default home;
