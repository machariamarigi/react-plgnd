import React, { createContext, useReducer } from "react";
import { IState, IAction } from "./intefaces";

const initialState: IState = {
    episodes: [],
    favourites: []
};

export const Store = createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, episodes: action.payload }
        case 'ADD_FAV':
            return { ...state, favourites: [...state.favourites, action.payload] }     
        case 'REMOVE_FAV':
            const favouritesWithoutEpisode = state.favourites.filter(fav => fav.id !== action.payload.id)
            return {...state, favourites: favouritesWithoutEpisode}
        default:
            return state
    }
}

export const StoreProvider = (props: any): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <Store.Provider value={{ state, dispatch }}>{ props.children }</Store.Provider>
}

