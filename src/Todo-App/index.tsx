import React, { Fragment, useState } from "react";

type FormElement = React.FormEvent<HTMLElement>

interface ITodo {
    text: string
    complete: boolean
}

const TodoApp = (): JSX.Element => {
    const [value, setValue] = useState<string>('')
    const [todos, setTodos] = useState<ITodo[]>([])

    const handleSubmit = (event: FormElement): void => {
        event.preventDefault();
        addTodo(value)
        setValue('')
    }

    const addTodo =(text: string) => {
        const newTodos: ITodo[] = [...todos, {text, complete: false}]
        setTodos(newTodos)
    }

    return (
        <Fragment>
            <h1>TODO LIST</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={e => setValue(e.target.value)} required />
                <button type="submit">Add Todo</button>
            </form>
            <section>
                {todos.map((todo: ITodo, index: number) => <div key={index}>{todo.text}</div>
                )}
            </section>
        </Fragment>
    )
}

export default TodoApp;
