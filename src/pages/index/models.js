/**
 * @author: Chang Jun
 * @date: 2018/10/14
 * @Description:
 */

import * as homeApi from './service.js';

export default {
  namespace: 'home',
  state: {
    testData: {},
    homeData:{}
  },
  effects: {
    * load(_, {call, put}) {
      const { success, data } = yield call(homeApi.getData, {});
      if (success === true) {
        yield put({ type: 'save',payload: {
            testData: data,
          } });
      }
    },
    * getdata(_, {call, put}) {
      const { success, data } = yield call(homeApi.getTestData, {});
      if (success === true) {
        yield put({ type: 'save',payload: {
            homeData: data,
          } });
      }
    }

  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    }
  }
}


