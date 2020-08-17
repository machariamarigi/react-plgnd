import React, { useEffect, useContext, lazy, Suspense, Fragment } from 'react'
import { IEpisode, IAction, IState } from '../intefaces'
import { Store } from '../Store'
import { fetchDataAction, ToggleFavouriteEpisode } from '../actions'

const EpisodeList = lazy(() => import('../components/EpisodeList'))

export default function HomePage() {
    const {state, dispatch}: {state: IState, dispatch: any} = useContext(Store) // context hook

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
                />
            </Suspense>
        </Fragment>

    )
}
