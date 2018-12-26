import axios from 'axios';
import config from '../config';

axios.defaults.baseURL = config.reqUrl;
axios.defaults.withCredentials = true;
// 手机登录
export const telLogin = (phone, password) => axios.get(`login/cellphone?phone=${phone}&password=${password}`);