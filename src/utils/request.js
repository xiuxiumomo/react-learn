/**
 * @author: Chang Jun
 * @date: 2018/10/14
 * @Description: request请求的封装
 */
import Taro from '@tarojs/taro';
import {baseUrl, noConsole} from '../config';

const request_data = {};

export default (options = {method: 'GET', data: {}}) => {
  if (!noConsole) {
    console.log(`${new Date().toLocaleString()}【 M=${options.url} 】P=${JSON.stringify(options.data)}`);
  }
  return Taro.request({
    url: baseUrl + options.url,
    data: {
      ...request_data,
      ...options.data
    },
    header: {
      'Content-Type': 'application/json',
    },
    method: options.method.toUpperCase(),
  }).then((res) => {
    const {statusCode, data} = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (!noConsole) {
        console.log(`${new Date().toLocaleString()}【 M=${options.url} 】【接口响应：】`, res.data);
      }
      if (data.success !== true) {
        Taro.showToast({
          title: `兄弟出错了!`,
          icon: 'none',
          mask: true,
        });
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  })
}
