import React from 'react';
import ReactDOM from 'react-dom';
import Parent from './components/Parent';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import CarsReducer from './reducers/carsReducer';

const store = createStore(
    combineReducers({CarsReducer})
);

ReactDOM.render(
    <Provider store={store}>
        <Parent/>
    </Provider>,
    document.getElementById('react-app')
);
