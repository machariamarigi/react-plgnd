import React, { Fragment } from 'react';

import { ITodo } from '../'

interface IProps {
    todos: ITodo[]
    toggleCompleteTodo: (index: number) => void
    removeTodo: (index: number) => void
}

const TodoList = ({ todos, toggleCompleteTodo, removeTodo }: IProps): JSX.Element => {
    return (
        <section>
        {todos.map((todo: ITodo, index: number) => (
            <Fragment key={index}>
                <div style={{ textDecoration: todo.complete ? 'line-through': '' }}>{todo.text}</div>
                <button type='button' onClick={() => toggleCompleteTodo(index)}>
                    { todo.complete? 'Incomplete': 'Complete' }
                </button>
                <button type='button' onClick={() => removeTodo(index)}>Delete</button>
            </Fragment>
            
        )
        )}
    </section>
    )
}

export default TodoList;
