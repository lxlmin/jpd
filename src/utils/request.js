//本js是  对axios 做一些配置

import store from "@/store";
import axios from "axios";
import axiosRetry from "axios-retry";
// axios.create返回值一个新的axios的实例
const request = axios.create({
  baseURL: "http://127.0.0.1:3000",
  timeout: 3000,
  withCredentials: true, // 跨域携带cookie
});
axiosRetry(request, { retries: 3 });
// 每一次请求都会触发的函数如何去设置（请求拦截器）
// 如何设置请求拦截器？
const cookie = store.state.auth.cookie
request.interceptors.request.use((config) => {
    // console.log(cookie);
    // config是你每次发起请求的详细配置(请求的地址,请求的路径,请求的参数)
    if (cookie) {
        ({
            get(){
                config.params || (config.params = {})
                config.params.cookie = cookie
            },
            post(){
                config.data || (config.data = {})
                config.data.cookie = cookie
            }
        })[config.method]()
    }
    return config
})

window.request = request;

export default request;

