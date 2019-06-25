import {CHANGE_INPUT_VALUE,ADD_LIST_ITEM,DELETE_LIST_ITEM} from './actionTypes';
export const todo_input_change = (value)=>{
    return {
        type: CHANGE_INPUT_VALUE,
        value
    }
}
export const add_list_item = ()=>{
    return {
        type: ADD_LIST_ITEM,
        
    }
}
export const delete_list_item = (value)=>{
    return {
        type: DELETE_LIST_ITEM,
        value
    }
}