import * as Actions from '../actions/actionTypes';

const initialState = {
    cars: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.ADD_CAR:
            state = {
                cars: [...state.cars, action.payload]
            }
            break;
        case Actions.DELETE_CARS:
            state = {
                cars: []
            }
            break;
    }

    return state;
}
