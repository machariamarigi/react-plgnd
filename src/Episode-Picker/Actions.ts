import { IEpisode, IAction, Dispatch } from "./intefaces"
import { isEpisodeInFavourites } from "./helpers"

export const fetchDataAction = async (dispatch: Dispatch) => {

    const url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const data = await fetch(url)
    const dataJSON = await data.json()
    return dispatch({
        type: 'FETCH_DATA',
        payload: dataJSON._embedded.episodes
    })
}

export const ToggleFavouriteEpisode = (episode: IEpisode, favourites: IEpisode[], dispatch: Dispatch) => {
    let dispatchObject = {
        type: 'ADD_FAV',
        payload: episode         
    }

    if (isEpisodeInFavourites(episode, favourites)) {
        dispatchObject = {
            type: 'REMOVE_FAV',
            payload: episode
        }
    }
    return dispatch(dispatchObject)
}
