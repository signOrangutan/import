import axios from "axios";
import { storageGet } from '@/assets/js'

export const instance = axios.create({
    baseURL: 'http://bgy.00e00.com/api/',
    timeout: 30000,
    
});



// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    let token = storageGet('token')
    config.headers = {
      ...config.headers,
      TOKEN: token || ''
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default instance