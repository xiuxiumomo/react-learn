
import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM } from '@/store/actionTypes';
const stateDefault = {
    inputValue: 'aaa',
    list: ['jack']
}

export default (state = stateDefault, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        let newState = Object.assign({}, state);
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_LIST_ITEM) {
        let newState = Object.assign({}, state);
        newState.list = [...newState.list, newState.inputValue];
        newState.inputValue = '';
        return newState;
    }
    return state;
}