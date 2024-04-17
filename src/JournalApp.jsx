import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { Provider } from "react-redux";
import { Store } from './store/store';

export const JournalApp = () => {
    return (
        <Provider store={Store}>
        <AppRouter />
        </Provider>
    )
}
