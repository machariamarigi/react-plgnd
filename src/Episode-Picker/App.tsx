import React, { Fragment, useContext, useEffect, lazy, Suspense } from 'react';
import { Link } from '@reach/router';

interface IProps {
    path: string
    children: JSX.Element[]
}

const App = (props: IProps): JSX.Element => {
    return (
        <Fragment>
            <header className="header">
                <div>
                    <h1>Rick And Morty Episode picker</h1>
                    <p>Pick your favourite episode</p> 
                </div>

                <div>
                    <Link to="/">Home</Link>
                    <Link to="/favourites">Favourites</Link>
                </div>
            </header>

            {props.children}
        </Fragment>
    )

}

export default App;
