/**
 * @author: Chang Jun
 * @date: 2018/10/14
 * @Description:
 */

import Taro from '@tarojs/taro';

export default {
  namespace: 'common',
  state: {
    initName:'常峻'
  },

  effects: {},

  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    },
  },

};

