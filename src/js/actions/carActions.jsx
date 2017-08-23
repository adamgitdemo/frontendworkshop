import * as Actions from './actionTypes';

export function newCar(val) {
    return {
        type: Actions.ADD_CAR,
        payload: val
    }
}

export function deleteCars(val) {
    return {
        type: Actions.DELETE_CARS
    }
}
