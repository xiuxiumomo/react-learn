import axios from "axios";
import qs from "qs";


const service = axios.create({
    baseURL: 'https://www.easy-mock.com',
    timeout: 15000 // 请求超时时间
});
// request拦截器
service.interceptors.request.use(
    config => {
        if (config.method === "post" || config.method === "put") {
             //去除空的字段
            if (config.data) {
                let data = JSON.parse(JSON.stringify(config.data));
                for (let k in data) {
                    if (data[k] === "") {
                        delete config.data[k];
                    }
                }
                config.data = qs.stringify(config.data);
            }
        } else {
            let params = JSON.parse(JSON.stringify(config.params));
            for (let k in params) {
                if (params[k] === "") {
                    delete config.params[k];
                }
            }

        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

// respone拦截器a
service.interceptors.response.use(
    response => {
        //请求出错对应的关系
        const res = response.data; //接口res
        return res;
    },
    error => {
        console.log("err" + error);
        return Promise.reject(error);
    }
);

export default service;
