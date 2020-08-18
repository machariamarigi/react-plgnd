import React, { lazy, useContext, Suspense, Fragment } from 'react'

import { Store } from '../Store'
import { IState } from '../intefaces'
import { ToggleFavouriteEpisode } from '../actions'
import { Link } from '@reach/router'

const EpisodeList = lazy(() => import('../components/EpisodeList'))

export default function FavouritesPage() {
    const { state, dispatch } : {state: IState, dispatch: any} = useContext(Store)

    return (
        <Fragment>
            <Suspense fallback={<div>loading...</div>}>
                {state.favourites.length === 0 ? 
                    <div>
                        No favourite episode picked, pick them <Link to="/">here</Link> 
                    </div>
                    :
                    <EpisodeList 
                        episodes={state.favourites}
                        favourites={state.favourites}
                        toggleFavouriteEpisode={ToggleFavouriteEpisode}
                        dispatch={dispatch}
                    />
                }

            </Suspense>
        </Fragment>

    )
}
