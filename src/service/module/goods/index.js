import request from '@/utils/request';
const BaseApi = 'https://cnodejs.org'; //不要这么放，配置在全局
export async function  getBanner(params={}) {
  return request({
    url: '/api/v1/banner',
    method: 'get',
    data: params,
  })
}


export function getGoodNewsList(params = {}) {
    return request({
        url: BaseApi+'/api/v1/topics?tab=good',
        method: 'get',
        data: params

    })
}
export function getGoodNewsDetail(params={}) {
    const { id } = params;
    delete params.id;
    return request({
        url: BaseApi+`/api/v1/topic/${id}`,
        method: 'get',
        data: params

    })
}

