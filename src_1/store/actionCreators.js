

import { CHANGE_INPUT_VALUE, CHANGE_ARR, DELETE_ARR,GET_HOEM_DATA,GET_SAGA_DATA } from './actionTypes';
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
export const _getHomeData = (data)=>{
    return {
        type: GET_HOEM_DATA,
        data
    }
}
// export const _getHomeAction = ()=>{
//     return async (dispatch)=>{
//         let res = await getData();
//         dispatch(_getHomeData(res.data))
//     }
// }
export const _getSagaData = ()=>{
    return {
        type: GET_SAGA_DATA
    }
}