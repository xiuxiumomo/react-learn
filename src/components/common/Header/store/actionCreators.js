import * as actionTypes from './actionTypes';
import * as api from '../../../../api';
export const change_title = (value)=>{
    return {
        type: actionTypes.CHANGE_TITLE,
        value
    }
}

export const getHeaderData = ()=>{
    return async (dispatch)=>{
        let res = await api.getData();
        let data = res.data;
        if(res.code===200){
            let action = {
                type: actionTypes.GETDATA,
                value: data
            }
           
            dispatch(action)
        }
    }
}