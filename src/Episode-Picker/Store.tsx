import React, { createContext } from "react";

const initialState = {};

export const Store = createContext(initialState);

const reducer = () => {

}

export const StoreProvider = (props: any): JSX.Element => {
    return <Store.Provider value='test'>{ props.children }</Store.Provider>
}

