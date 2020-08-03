import React, { Fragment } from 'react';
import { render } from 'react-dom';
import StateManagementKentC from './State-Management-KentC';
import TodoApp from './Todo-App';

export default function App(): React.SFCElement<{}> {
    return (
        <Fragment>
            <StateManagementKentC />
            <TodoApp />
        </Fragment>
    )
}

render(<App />, document.getElementById('root'))
