import React from 'react';
import { useCounter } from '../contexts/CounterContext';

export function CountDisplay () {
    const { count } = useCounter();
    return (
        <div style={{
            padding: "20px",
        }}>
            {count}
        </div>
    );
}
