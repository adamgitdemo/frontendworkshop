import {FETCH_FINISH, FETCH_START} from './actionTypes';

export function startFetching() {
    return {
        type: FETCH_START
    }
}

export function stopFetching() {
    return {
        type: FETCH_FINISH
    }
}
