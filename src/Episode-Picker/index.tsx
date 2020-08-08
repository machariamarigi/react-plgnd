
import React from 'react';

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
