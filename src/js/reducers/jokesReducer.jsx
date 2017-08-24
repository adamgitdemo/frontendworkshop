import {SET_JOKES} from '../actions/actionTypes';

const initialState = {
    jokes: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_JOKES:
            state = {
                jokes: action.payload
            }
            break;
    }

    return state;
}
