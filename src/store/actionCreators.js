import { CHANGE_INPUT_VALUE, CHANGE_ARR, DELETE_ARR } from './actionTypes';
export const _InputChange = (value) => {
    return {
        type: CHANGE_INPUT_VALUE,
        value
    }

}
export const _btnClick = () => {
    return {
        type: CHANGE_ARR
    }
}
export const _itemClick = (index) => {
    return {
        type: DELETE_ARR,
        index
    }

}