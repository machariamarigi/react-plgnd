import React from 'react';

interface ICounterProps{
    count: number,
    onIncrementClick: () => void
}

const Counter = ({ count, onIncrementClick }: ICounterProps) => {
    return <button onClick={onIncrementClick}>{count}</button>
}

export default Counter;
