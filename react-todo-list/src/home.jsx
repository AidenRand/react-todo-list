import React, { useState } from 'react';

function home() {
    const [input, setInput] = useState('');

    const [updated, setUpdated] = useState(input);

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleClick = () => {
        setUpdated(input);
    };

    return (
        <div id='home-container'>
            <input
                type='text'
                id='text-box'
                value={input}
                onChange={handleChange}
            />
            <button id='click-button' onClick={handleClick}>
                click
            </button>
            <p>{updated}</p>
        </div>
    );
}

export default home;
