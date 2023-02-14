import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
// import { message } from "ant-design-vue";
import cookie from "@/utils/cookie";
// import pinia from "@/store/store";
// import { loginStore } from "@/store/login";
// import router from "@/router/index";

// const login_store = loginStore(pinia);
// const baseurl: string = process.env.VUE_APP_BASE_API;
interface Result<T> {
  code: number;
  msg: string;
  data: T;
}

class Request {
  instance: AxiosInstance;

  baseConfig: AxiosRequestConfig = { baseURL: baseurl, timeout: 60000 };

  constructor(config: AxiosRequestConfig) {
    // 实例axios
    this.instance = axios.create(Object.assign(this.baseConfig, config));
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const token = cookie.getToken();
        if (config && config.headers) {
          config.headers["Device-Type"] = "web";
          if (token) {
            config.headers["token"] = token;
          }
        }
        return config;
      },
      (err: any) => {
        return Promise.reject(err);
      }
    );
    // 响应拦截
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        if (res.data.code === 0) {
          return res.data;
        }
        return Promise.reject(res.data);
      },
      (err: any) => {
        let messageStr = "";
        switch (err.response.status) {
          case 400:
            messageStr = "请求错误(400)";
            break;
          case 401:
            messageStr = "未授权，请重新登录(401)";
            // 这里可以做清空storage并跳转到登录页的操作
            cookie.removeToken();
            if (router.options.history.location !== "/") {
              router.push("/");
            }
            login_store.isShowModal();
            break;
          case 403:
            messageStr = "拒绝访问(403)";
            break;
          case 404:
            messageStr = "请求出错(404)";
            break;
          case 408:
            messageStr = "请求超时(408)";
            break;
          case 500:
            messageStr = "服务器错误(500)";
            break;
          default:
            messageStr = `连接出错(${err.response.status})!`;
        }
        //message.error(messageStr);
        messageStr;
        return Promise.reject(err.response);
      }
    );
  }

  // 定义请求方法
  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config);
  }

  public get<T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<Result<T>> {
    return this.instance.get(url, config);
  }

  public post<T = unknown, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<Result<T>> {
    return this.instance.post(url, data, config);
  }

  public put<T = unknown, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<Result<T>> {
    return this.instance.put(url, data, config);
  }

  public delete<T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<Result<T>> {
    return this.instance.delete(url, config);
  }
}

const request = new Request({});

export default request;
