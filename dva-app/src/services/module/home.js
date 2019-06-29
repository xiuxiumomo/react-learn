import request from '../../utils/request';

export function getUser() {
    return request('/mock/5d1760340a94ec77aeb123a6/v1/userList');
}
