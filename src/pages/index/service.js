/**
 * @author: Chang Jun
 * @date: 2018/10/14
 * @Description:
 */

import Request from '../../utils/request';

export const getData = data => Request({
  url: '/topics',
  method: 'GET',
  data,
});

export const getTestData = data => Request({
  url: '/topic/5433d5e4e737cbe96dcef312',
  method: 'GET',
  data,
});

