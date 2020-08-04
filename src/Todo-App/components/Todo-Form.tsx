import React from 'react';
import { FormElement } from '../'

interface IProps {
    value: string
    handleSubmit: (event: FormElement) => void
    handeleChange: (value: string) => void
}

const TodoForm = ({value, handleSubmit, handeleChange}: IProps): JSX.Element => {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"  value={value} required onChange={e => handeleChange(e.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm;
