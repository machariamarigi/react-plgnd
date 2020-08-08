
import React from 'react';

import "./index.scss"
import { StoreProvider } from './Store';
import App from './App';

const EpisodePickerShell =  (): JSX.Element => {
    return (
        <StoreProvider>
            <App />
        </StoreProvider>

    )
}

export default EpisodePickerShell;
