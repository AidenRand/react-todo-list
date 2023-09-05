import React, { useState, useRef } from 'react';

const taskContainer = document.createElement('div');
const taskArr = [];

function home() {
    const inputRef = useRef();

    let [input, setInput] = useState('');

    const [updated, setUpdated] = useState(input);

    const [tasks, addTask] = useState([]);

    taskContainer.className = 'task-container';
    document.body.appendChild(taskContainer);

    const handleClick = () => {
        setUpdated(input);
        let newDiv = document.createElement('div');
        newDiv.innerText = input;
        taskContainer.appendChild(newDiv);
        taskArr.push(inputRef.current.value);
        console.log(taskArr);
        inputRef.current.value = '';
    };

    return (
        <div id='home-container'>
            <input type='text' id='text-box' ref={inputRef} />
            <button id='click-button' onClick={handleClick}>
                click
            </button>
            <p>{updated}</p>
        </div>
    );
}

export default home;
