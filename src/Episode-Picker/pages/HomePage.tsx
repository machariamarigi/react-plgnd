import React, { useEffect, useContext, lazy, Suspense, Fragment } from 'react'
import { IState, Dispatch } from '../intefaces'
import { Store } from '../Store'
import { fetchDataAction, ToggleFavouriteEpisode } from '../actions'

const EpisodeList = lazy(() => import('../components/EpisodeList'))

export default function HomePage() {
    const {state, dispatch}: {state: IState, dispatch: Dispatch} = useContext(Store) // context hook

    useEffect(() => {
        state.episodes.length === 0 && fetchDataAction(dispatch)
    })

    return (
        <Fragment>
            <Suspense fallback={<div>Loading ...</div>}>
                <EpisodeList 
                    episodes={state.episodes}
                    toggleFavouriteEpisode={ToggleFavouriteEpisode} 
                    favourites={state.favourites}
                    dispatch={dispatch}
                />
            </Suspense>
        </Fragment>

    )
}
