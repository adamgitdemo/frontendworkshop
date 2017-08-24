import React from 'react';
import ReactDOM from 'react-dom';
import Jokes from './components/Jokes';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import JokesReducer from './reducers/jokesReducer';
import LoadingReducer from './reducers/loadingReducer';

const store = createStore(
    combineReducers({LoadingReducer, JokesReducer}),
    {},
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <Jokes/>
    </Provider>,
    document.getElementById('react-app')
);
