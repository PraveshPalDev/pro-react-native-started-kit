import axios from 'axios';

const get = (url, params = {}, headers = {}) => axios.get(url, params, headers);
const post = (url, data = {}, headers = {}) => axios.post(url, data, headers);
const put = (url, data = {}, headers = {}) => axios.put(url, data, headers);
const del = url => axios.delete(url);

export default {
  get,
  post,
  put,
  delete: del,
};
