import React from 'react';
import { CountButton } from './CountButton';
import { useCounter } from '../contexts/CounterContext';

export function CountNav () {
    const { count, setCount } = useCounter();
    return (
        <nav style={{
            backgroundColor: '#00cec9',
            padding: '20px'
        }}>
            <CountButton
                setCount={() => setCount(count + 1)}
                buttonText="UP"
            />
            <CountButton
                setCount={() => setCount(count - 1)}
                buttonText="DOWN"
            />
        </nav>
    );
}
