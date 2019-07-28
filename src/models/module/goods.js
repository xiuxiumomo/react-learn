
import { goods as api} from '@/service/index';
export default {
  namespace: 'goods',
  state: {
    bannerList: {
      data: [],
      total: 0
    },
    goodsList:{
      data: []

    }
  },
  effects: {
    *getBanner({params}, { call, put }) {
      const res = yield call(api.getBanner,params);
      const resultData = res.data;
      yield put({
        type: '_getBanner',
        params: {
          data: resultData.data.data,
          total: resultData.data.total
        }
      });
    },
    *getGoodNewsList({params}, { call, put }) {
      const res = yield call(api.getGoodNewsList,params);
      yield put({
        type: 'newsList',
        params: {
          data: res.data
        }
      });
    },

  },
  reducers: {
    _getBanner(state,action) {
      let newState = Object.assign({},state);
      newState.bannerList = action.params;
      return newState;
    },
    newsList(state,action) {
      let newState = Object.assign({},state);
      newState.goodsList = action.params;
      return newState;
    },

  },
};
