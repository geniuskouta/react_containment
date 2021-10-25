import React from 'react';

export function CountButton ({setCount, buttonText}) {
    return (
        <button onClick={setCount}>
            {buttonText}
        </button>
    );
}
