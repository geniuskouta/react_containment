import React from 'react';
import { CountNav } from './CountNav';
import { CountDisplay } from './CountDisplay';
import { CounterProvider } from '../contexts/CounterContext';

export function Counter () {
    return (
        <>
            <h1>Counter With Contexts</h1>
            <CounterProvider>
                <CountDisplay />
                <CountNav />
            </CounterProvider>
        </>
    );
}
