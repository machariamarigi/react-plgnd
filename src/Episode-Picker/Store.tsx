import React, { createContext } from "react";

interface IState {
    episodes: [],
    favourites: []
}

const initialState: IState = {
    episodes: [],
    favourites: []
};

export const Store = createContext<IState>(initialState);

const reducer = () => {

}

export const StoreProvider = (props: any): JSX.Element => {
    return <Store.Provider value={initialState}>{ props.children }</Store.Provider>
}

