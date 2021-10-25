// you do not want to use useContext unless you want to share globally shared states
// this is a bad example

import React, { useContext, useState } from "react";

const CounterContext = React.createContext();

export function useCounter() {
    return useContext(CounterContext);
}

export function CounterProvider({children}) {
    const [count, setCount] = useState(0);

    const value = {
        count: count,
        setCount: setCount
    };

    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    );
}
