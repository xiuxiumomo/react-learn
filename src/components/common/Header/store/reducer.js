
import { CHANGE_TITLE } from './actionTypes';
const stateDefault = {
    title: false
}

export default (state = stateDefault, action) => {
    if (action.type === CHANGE_TITLE) {
        let newState = Object.assign({}, state);
        newState.title = action.value;
        return newState;
    }
    
    
    return state;
}