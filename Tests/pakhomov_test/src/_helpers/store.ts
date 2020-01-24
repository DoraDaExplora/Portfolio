import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../_reducers/index';
import thunkMiddleware from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware
        )
    )
);