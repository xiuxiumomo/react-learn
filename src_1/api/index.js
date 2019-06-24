import request from '../utils/axios';
export function getData(params={}){
    return request({
        url: '/mock/5b7b776bb6508f70048c4925/example/tableData',
        method: 'get',
        params
    })
}