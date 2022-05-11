import {resolvePreset} from '@babel/core';
import axios from 'axios';
import {Alert} from 'react-native';
import Config from 'react-native-config';
import {requestLog} from './apis/requestLog';
import Url from './Url';
const timeout = 10000;
let isRefreshingToken = false;
let promiseRefresh = new Promise(function (resolve, reject) {});
const instance = axios.create({
  baseURL: Config.BASE_URL,
  timeout,
});
const refreshToken = async () => {
  console.log('refreshToken');
  return axios.get('https://jsonplaceholder.typicode.com/' + Url.getData);
};
instance.interceptors.request.use(
  config => {
    if (__DEV__) {
      // console.log('CONFIG FOR ' + config.url + ' :', config);
      requestLog(config?.method!, config?.url!, config?.data!, 'req');
    }
    return config;
  },
  error => {
    if (__DEV__) {
      requestLog(error?.method!, error?.url!, error!, 'err');
      // console.log('CONFIG ERROR FOR ' + error.url + ' :', error);
    }
    return Promise.reject(error);
  },
);
instance.interceptors.response.use(
  response => {
    if (__DEV__) {
      requestLog(response?.config?.method!, response?.config?.url!, response?.config?.data!, 'res');
      // console.log('RESPONSE FOR ' + response.config.url + ' :', response);
    }
    return response;
  },
  async error => {
    if (__DEV__) {
      requestLog(error?.config?.method!, error?.config?.url!, error!, 'err');
      // console.log('ERROR FOR ' + error.config.url + ' :', error?.response);
    }
    const status = error?.response?.status || 500;
    if (status === 404) {
      let dataRefresh: any = null;
      if (!isRefreshingToken) {
        isRefreshingToken = true;
        promiseRefresh = new Promise(async function (resolve, reject) {
          return resolve(await (await refreshToken()).data);
        });
      }
      dataRefresh = await Promise.resolve(promiseRefresh);
      error.response.config.headers['Authorization'] = 'Bearer ' + 'hihihihi';
      const newUrl = error.response.config.url.replace('aaaa', '');
      error.response.config.url = newUrl;
      console.log(error.response);
      return await Promise.resolve(axios(error.response.config));
    }
    return Promise.reject(error);
  },
);

export default instance;
