import {SET_JOKES} from './actionTypes';
import axios from 'axios';
import {startFetching, stopFetching} from './loadingActions';

export function setJokes(val) {
    return {
        type: SET_JOKES,
        payload: val
    }
}

export function fetchJokes() {
    return function (dispatch) {
        dispatch(startFetching());
        axios.get("http://api.icndb.com/jokes/random/3")
            .then(response => {
                dispatch(setJokes(extractJokes(response.data.value)));
                dispatch(stopFetching());
            })
    }

    function extractJokes(entries) {
        return entries.map(e => {
            return e.joke;
        })
    }
}
