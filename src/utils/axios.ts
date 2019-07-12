import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config;
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  // 对响应错误做点什么
  console.log(error);
});


export default {
  // 封装axios
  axios,
  // 封装get
  requestGet(url, params = {}) {
    return axios.get(url, {params}).then();
  },
  // 封装post
  requestPost(url, params = {}) {
    return axios.post(url, params).then();
  },
};


