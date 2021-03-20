import axios from 'axios';
import {BASE_URI} from './api';
const instance = axios.create({
  baseURL: BASE_URI,
});
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.status == 200) {
      return response.data.data;
    }
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

const get = async (api, params) => {
  return new Promise((resolve, reject) => {
    instance
      .get(api, params)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const post = async (api, params) => {
  return new Promise((resolve, reject) => {
    instance
      .post(api, params)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export default {
  get,
  post,
};
