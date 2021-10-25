import React, { useState } from 'react';
import { CountButton } from './CountButton';
import { CountNav } from './CountNav';
import { CountDisplay } from './CountDisplay';

export function Counter () {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>Counter With Containment</h1>
            <CountDisplay count={count} />
            <CountNav>
                <CountButton
                    setCount={() => setCount(count + 1)}
                    buttonText="UP"
                />
                <CountButton
                    setCount={() => setCount(count - 1)}
                    buttonText="DOWN"
                />
            </CountNav>
        </>
    );
}
