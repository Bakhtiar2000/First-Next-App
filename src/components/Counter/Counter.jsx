"use client"

import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <p className="my-20 text-4xl font-bold text-purple-500">{counter}</p>
            <button
                className="btn btn-accent"
                onClick={() => setCounter(counter + 1)}
            >
                Increase
            </button>
            <button
                className="btn btn-accent ml-3"
                onClick={() => setCounter(counter - 1)}
            >
                Decrease
            </button>
        </div>
    );
};

export default Counter;