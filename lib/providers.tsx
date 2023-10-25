'use client';

/* Core */
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import { PropsWithChildren } from 'react';

export const Providers = ({ children }: PropsWithChildren<{}>) => {
    return (
        <Provider store={setupStore()}>
                {children}
        </Provider>
    );
};
