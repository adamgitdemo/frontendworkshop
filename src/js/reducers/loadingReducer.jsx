import {FETCH_FINISH, FETCH_START} from '../actions/actionTypes';

const initialState = {
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            state = {
                loading: true
            }
            break;
        case FETCH_FINISH:
            state = {
                loading: false
            }
            break;
    }

    return state;
}
