import React, { Fragment } from "react";

const TodoApp = (): JSX.Element => {
    return (
        <Fragment>
            <h1>TODO LIST</h1>
            <form>
                <input type="text" required />
                <button type="submit">Add Todo</button>
            </form>
        </Fragment>
    )
}

export default TodoApp;
