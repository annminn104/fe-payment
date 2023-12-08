/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance } from 'axios';
import { RequestInterceptorReject, RequestInterceptorResolve } from './request.interceptor';
import { ResponseInterceptorFulfilled } from './response.interceptor';
import { ContentTypeEnum, HttpStatusCodeEnum, UserEndPointEnum } from '@/common/enums';
import { environments } from '@/common/environments';
import { AxiosUtils } from '@/common/utils';
import { IErrorResponse, ITokenResponse } from '@/common/interfaces';

export class ApiService {
  instance: AxiosInstance;
  private refreshTokenRequest: Promise<ITokenResponse> | null;

  private baseHeader = {
    baseURL: environments.ServerUri,
    headers: { 'Content-Type': ContentTypeEnum.Json }
  };

  constructor() {
    this.refreshTokenRequest = null;
    this.instance = axios.create({ ...this.baseHeader });

    this.instance.interceptors.request.use(RequestInterceptorResolve, RequestInterceptorReject);
    this.instance.interceptors.response.use(ResponseInterceptorFulfilled, (error: AxiosError) => {
      if (![HttpStatusCodeEnum.UnprocessableEntity, HttpStatusCodeEnum.Unauthorized].includes(error.response?.status as number)) {
        const data: any | undefined = error.response?.data;
        const message = data?.message || error.message;
        console.log(message);
        // toast.error(message);
      } else if (AxiosUtils.isAxiosUnauthorizedError<IErrorResponse<{ name: string; message: string }>>(error)) {
        // const config = error.response?.config || { headers: {}, url: '' };
        // const { url } = config;
        // if (AxiosUtils.isAxiosExpiredTokenError(error) && url !== AuthEndpointEnum.RefreshToken) {
        //   this.refreshTokenRequest = this.refreshTokenRequest
        //     ? this.refreshTokenRequest
        //     : authService.refreshToken().finally(() => {
        //         setTimeout(() => {
        //           this.refreshTokenRequest = null;
        //         }, 10000);
        //       });
        //   return this.refreshTokenRequest.then(() => {
        //     return this.instance({ ...config, headers: { ...config.headers, Authorization: authService.getAccessToken() } });
        //   });
        // }
      }
    });
  }
}
const apiService = new ApiService().instance;
export default apiService;
