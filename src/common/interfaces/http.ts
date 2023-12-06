import { AxiosRequestConfig } from 'axios';

export interface IHttpResponse<T> {
  statusCode: number;
  data: T;
  errors: unknown;
  message: string;
}

export interface IApiService {
  get: <T>(url: string, params?: unknown) => Promise<T>;
  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig<unknown>) => Promise<T>;
  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig<unknown>) => Promise<T>;
  delete: <T>(url: string, config?: AxiosRequestConfig<unknown>) => Promise<T>;
  patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig<unknown>) => Promise<T>;
  configure: <T>(config: AxiosRequestConfig<unknown>) => Promise<T>;
}
