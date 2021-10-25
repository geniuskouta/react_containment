import React from 'react';

export function CountNav ({children}) {
    return (
        <nav style={{
            backgroundColor: '#00cec9',
            padding: '20px'
        }}>
            {children}
        </nav>
    );
}
