import React, { Fragment, useContext, useEffect, lazy, Suspense } from 'react';

import { Store } from './Store';
import { IEpisode, IAction, IState } from './intefaces';

const EpisodeList = lazy(() => import('./components/EpisodeList'))

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

    const ToggleFavouriteEpisode = (episode: IEpisode): IAction => {
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
            <Suspense fallback={<div>Loading ...</div>}>
                <EpisodeList 
                    episodes={state.episodes}
                    toggleFavouriteEpisode={ToggleFavouriteEpisode} 
                    isEpisodeInFavourites={isEpisodeInFavourites}
                />
            </Suspense>
            
        </Fragment>
    )

}

export default App;
