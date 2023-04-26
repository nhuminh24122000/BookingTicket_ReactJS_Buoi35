import { combineReducers, createStore } from 'redux';

import seatReducer from './reducer/seatReducer';

const rootReducer = combineReducers({

    seat: seatReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
