import { takeEvery, put } from 'redux-saga/effects';
import { GET_SAGA_DATA } from './actionTypes';
import { _getHomeData } from './actionCreators';
import { getData } from '../api/index';


function* getSagaData() {
    let res = yield getData();
    const action = _getHomeData(res.data);
    yield put(action)
}
function* mySaga() {
    yield takeEvery(GET_SAGA_DATA, getSagaData);
}
export default mySaga;