import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { authService } from '../auth';

export const RequestInterceptorResolve = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  if (authService.getAccessToken()) {
    config.headers!.Authorization = `Bearer ${authService.getAccessToken()}`;
  }
  return config;
};

export const RequestInterceptorReject = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};
