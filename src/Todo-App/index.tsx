import React, { Fragment, useState } from "react";

type FormElement = React.FormEvent<HTMLElement>

const TodoApp = (): JSX.Element => {
    const [value, setValue] = useState<string>('')

    const handleSubmit = (event: FormElement): void => {
        event.preventDefault();
        setValue('')
    }

    return (
        <Fragment>
            <h1>TODO LIST</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={e => setValue(e.target.value)} required />
                <button type="submit">Add Todo</button>
            </form>
        </Fragment>
    )
}

export default TodoApp;
