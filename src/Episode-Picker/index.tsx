
import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import "./index.scss"
import { StoreProvider } from './Store';
import App from './App';
import HomePage from './pages/HomePage';
import FavouritesPage from './pages/FavouritesPage';

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent

const EpisodePickerShell =  (): JSX.Element => {
    return (
        <StoreProvider>
            <Router>
                <App path="/">
                    <RouterPage pageComponent={<HomePage />} path="/"></RouterPage>
                    <RouterPage pageComponent={<FavouritesPage />} path="/favourites"></RouterPage>
                    <RouterPage pageComponent={<div>404: Not found</div>} default></RouterPage>
                </App>
            </Router>

        </StoreProvider>

    )
}

export default EpisodePickerShell;
