import React, { useState } from 'react';

import Counter from './components/Counter'
import CounterDisplay from './components/CounterDisplay';

const StateManagementKentC = (): JSX.Element => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(c => c + 1)

    return (
        <div>
            <h1>Application State Management</h1>
            <CounterDisplay count={count} />
            <Counter count={count} onIncrementClick={increment} />
        </div>
    )
}

export default StateManagementKentC
