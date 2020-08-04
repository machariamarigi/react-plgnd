import React, { Fragment, useState } from "react";

import TodoForm from "./components/Todo-Form";
import TodoList from "./components/Todo-List";

export type FormElement = React.FormEvent<HTMLElement>

export interface ITodo {
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

    const handleChange = (value: string): void => {
        setValue(value)
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
            <TodoForm value={value} handleSubmit={handleSubmit} handeleChange={handleChange}></TodoForm>
            <TodoList todos={todos} toggleCompleteTodo={toggleCompleteTodo} removeTodo={removeTodo} ></TodoList>
        </Fragment>
    )
}

export default TodoApp;
