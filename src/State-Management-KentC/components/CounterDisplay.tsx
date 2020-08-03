import React from 'react';

interface ICounterDisplayProps {
    count: number
}

const CounterDisplay = ({count}: ICounterDisplayProps) => (<div>The current counter count is {count}</div>)

export default CounterDisplay;
