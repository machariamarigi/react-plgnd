import React, { useState } from 'react';

const Hello = ({who}: { who: string }) => <p>Hello, { who }</p>

interface ICounterProps{
    count: number,
    onIncrementClick: () => void
}

const Counter = ({ count, onIncrementClick }: ICounterProps) => {
    return <button onClick={onIncrementClick}>{count}</button>
}

interface ICounterDisplayProps {
    count: number
}
const CounterDisplay = ({count}: ICounterDisplayProps) => (<div>The current counter count is {count}</div>)

const StateManagementKentC = (): JSX.Element => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(c => c + 1)

    return (
        <div>
            <h1>IOC-REACT</h1>
            <Hello who="Macharia Marigi"/> 
            <CounterDisplay count={count} />
            <Counter count={count} onIncrementClick={increment} />
        </div>
    )
}

export default StateManagementKentC
