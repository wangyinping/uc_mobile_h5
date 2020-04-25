/**
 * Created by Kaola on 2020-02-17.
 */
import Vue from 'vue';
import { Dialog } from 'vant';
import axios from 'axios';
import router from '@/router';
import AES from '@/util/AES.js';
import Config from '../index.config';

const { dragonUrl } = Config;
Vue.use(Dialog);

// 服务端异常码处理
function AbnormalCodeProcessing(data) {
  // 针对微信的异常拦截。
  if (data.success === 'false') {
    const { code } = data.error;
    const { message } = data.error;
    if (code === '10100') { // 10100:用户未登录
      router.replace({ path: '/' });
    } else if (code === '20100') { // 20100:token过期，请重新登录
      router.replace({ path: '/' });

    } else if (code === '80000') {
      Dialog.alert({
        title: '无法识别',
        message: '请检查周围环境、光线等确保拍摄结果清晰，无反光'
      });
    } else if (code === '100006') {
      Dialog.alert({
        message
      }).then(() => {
        location.reload()
      });
    } else {
      Dialog.alert({
        message
      });
    }
  }
}

function isFormData(obj) {
  return obj instanceof FormData;
}
function serialize(data) {
  let str = '';
  for (const i in data) {
    str += `&${i}=${data[i]}`;
  }
  return str.substr(1);
}

function axiosRequest(options) {
  const opts = {
    withCredentials: true,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      openid: localStorage.getItem('openid'),
      time: new Date().getTime(),
      system: 'onlineSigning'
    }
  };
  opts.url = /^(http|https):\/\//.test(options.url) ? options.url : dragonUrl + options.url;
  if (options.longTimeOut) {
    opts.timeout = options.longTimeOut;
  }
  if (options.method.toLowerCase() === 'post') {
    opts.method = 'post';
    opts.data = options.data;
  } else {
    opts.method = 'get';
    opts.params = options.data;
  }
  if (options.type === 'verifyCode') {
    opts.responseType = 'blob';
  }
  const config = opts;
  return axios.request(config).then(res => res.data).catch((error) => {
    console.log(error);
    document.getElementById('loading').style.display = 'none';
    return {};
  });
}

export default {
  get(url, data, config) {
    return axiosRequest({
      method: 'GET',
      url,
      ...config,
      data: Object.assign({}, data)
    });
  },
  post(url, data, config) {
    return axiosRequest({
      url,
      data,
      ...config,
      method: 'POST'
    });
  },
  request: axiosRequest
};

axios.interceptors.response.use((response) => { // 请求状态码为2XX才走此逻辑， 如果下方添加异常捕获表示状态码为非2XX的逻辑处理
  document.getElementById('loading').style.display = 'none';
  if (response.status === 200) {
    if (typeof response.data === 'string') {
      response.data = JSON.parse(AES.decrypt(response.data));
    }
    AbnormalCodeProcessing(response.data);
    return response;
  }
},
  (error) => {
    let message = '';
    if (error.message.search('timeout') !== -1) { // 超时error捕获
      message = '请求超时，请稍后再试！';
    } else {
      message = '服务器开小差，请稍后再试！';
    }
    Dialog.alert({ message });
    return Promise.reject(error);
  });

axios.interceptors.request.use((config) => {
  const arr = config.url.split('/');
  const item = arr[arr.length - 1];
  config.headers['Content-Type'] = 'application/json';
  config.data = AES.encrypt(JSON.stringify(config.data));
  document.getElementById('loading').style.display = 'block';
  return config;
},
  (error) => { // 服务器请求错误，超时是不走此代码的，详情请看https://www.npmjs.com/package/axios
    Dialog.alert({ message: '服务器请求错误！' });
    return Promise.reject(error);
  });
