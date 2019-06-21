import { CHANGE_INPUT_VALUE, CHANGE_ARR, DELETE_ARR ,GET_HOEM_DATA} from './actionTypes';
const defaultState = {
    inputValue: '1111',
    list: [1, 2]
};
//reducer 可以接受state,但绝对不能直接改state
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = Object.assign({}, state);
        newState.inputValue = action.value;
        return newState; //如果有改变返回改变后的对象
    }
    if (action.type === CHANGE_ARR) {
        const newState = Object.assign({}, state);
        newState.list.push(newState.inputValue);

        newState.inputValue = '';
        return newState;
    }
    if (action.type === DELETE_ARR) {
        const newState = Object.assign({}, state);
        newState.list.splice(action.index, 1);
        return newState;
    }
    if(action.type===GET_HOEM_DATA){
        const newState = Object.assign({}, state);
        newState.list = action.data;
        return newState;
    }

    return state; //默认return state对象
}