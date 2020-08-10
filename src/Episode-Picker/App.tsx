import React, { Fragment, useContext, useEffect } from 'react';

import { Store } from './Store';
import { IEpisode, IAction, IState } from './intefaces';

const App = (): JSX.Element => {
    const {state, dispatch}: {state: IState, dispatch: any} = useContext(Store) // context hook

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

    const isEpisodeInFavourites = (episode: IEpisode): boolean => state.favourites.includes(episode)

    const ToggleFavouriteAction = (episode: IEpisode): IAction => {
        let dispatchObject = {
            type: 'ADD_FAV',
            payload: episode         
        }

        if (isEpisodeInFavourites(episode)) {
            dispatchObject = {
                type: 'REMOVE_FAV',
                payload: episode
            }
        }
        return dispatch(dispatchObject)
    }

    return (
        <Fragment>
            <header className="header">
                <h1>Rick And Morty Episode picker</h1>
                <p>Pick your favourite episode</p> 
            </header>

            <section className="episode-layout">
                {
                    state.episodes.map((episode: IEpisode): JSX.Element => {
                        return (
                            <section 
                                key={episode.id} 
                                className="episode-card" 
                                style={{background: isEpisodeInFavourites(episode)? 'cyan': ''}}>
                                <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`}/>
                                <div>{episode.name}</div>
                                <section>
                                    <div>
                                        Season: {episode.season} Number: {episode.number}
                                    </div>
                                    <button type='button' onClick={() => ToggleFavouriteAction(episode)}>
                                        {isEpisodeInFavourites(episode) ? 'Unfavourite' : 'Favourite' }
                                    </button>
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
