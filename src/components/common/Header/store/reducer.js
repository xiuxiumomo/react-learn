
import * as actionTypes from './actionTypes';
const stateDefault = {
    title: false,
    list: []
}

export default (state = stateDefault, action) => {
    if (action.type === actionTypes.CHANGE_TITLE) {
        let newState = Object.assign({}, state);
        newState.title = action.value;
        return newState;
    }
    if (action.type === actionTypes.GETDATA) {
        let newState = Object.assign({}, state);
        newState.list = [...action.value];
        return newState;
    }


    return state;
}