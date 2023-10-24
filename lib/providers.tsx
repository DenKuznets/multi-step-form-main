'use client';

/* Core */
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PropsWithChildren } from 'react';

export const Providers = (props: PropsWithChildren) => {
    return <Provider store={store}>{props.children}</Provider>;
};
