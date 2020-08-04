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
        event.preventDefault()
        addTodo(value)
        setValue('')
    }

    const addTodo =(text: string): void => {
        const newTodos: ITodo[] = [...todos, {text, complete: false}]
        setTodos(newTodos)
    }

    const toggleCompleteTodo = (index: number): void => {
        const newTodos: ITodo[] = [...todos]
        newTodos[index].complete = !newTodos[index].complete
        setTodos(newTodos)
    }

    const removeTodo =(index: number): void => {
        const newTodos: ITodo[] = [...todos]
        newTodos.splice(index, 1)
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
        </Fragment>
    )
}

export default TodoApp;
