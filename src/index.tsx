import React, { Fragment } from 'react';
import { render } from 'react-dom';
import StateManagementKentC from './State-Management-KentC';
import TodoApp from './Todo-App';
import EpisodePicker from './Episode-Picker';

const App = (): JSX.Element => {
    return (
        <Fragment>
            <StateManagementKentC />
            <TodoApp />
            <EpisodePicker />
        </Fragment>
    )
}

render(<App />, document.getElementById('root'))

export default App;
