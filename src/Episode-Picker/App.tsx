import React, { Fragment, useContext, useEffect } from 'react';

import { Store } from './Store';

interface IEpisode {
    id: number
    name: string
    airdate: string
    airtime: string
    airstamp: string
    image: {
        medium: string
    }
    number: number
    runtime: number
    season: number
    summary: string
    url: string
}

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
            <section className="episode-layout">
                {
                    state.episodes.map((episode: IEpisode): JSX.Element => {
                        return (
                            <section key={episode.id}>
                                <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`}/>
                                <div>{episode.name}</div>
                                <section>
                                    Season: {episode.season} Number: {episode.number}
                                </section>
                            </section>
                        )
                    })
                }
            </section>
        </Fragment>
    )

}

export default App;
