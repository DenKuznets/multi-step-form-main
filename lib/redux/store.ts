import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';

const rootReducer = combineReducers({
    app: appReducer
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    });
}
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
