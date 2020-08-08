import React, { Fragment, useContext, useEffect } from 'react';

import { Store } from './Store';

const App = (): JSX.Element => {
    const {state, dispatch} = useContext(Store) // context hook

    useEffect(() => {
        state.episodes.length === 0 && fetchDataAction()
    })

    const fetchDataAction = async () => {

        const url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
        const data = await fetch(url)
        const dataJSON = await data.json()
        return dispatch({
            type: 'FETCH_DATA',
            payload: dataJSON._embedded.episodes
        })
    }

    return (
        <Fragment>
            <h1>Rick And Morty Episode picker</h1>
            <p>Pick your favourite episode</p>
        </Fragment>
    )

}

export default App;
