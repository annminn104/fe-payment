import { StorageEnum, AuthEndpointEnum } from '@/common/enums';
import { IAuthLoginRequest, ITokenResponse, IUserResponse } from '@/common/interfaces';
import { CookieUtils } from '@/common/utils';
import { AxiosPromise } from 'axios';
import ApiService from '../api';

export const authService = {
  isLogged: false,
  refreshTokenRequest: null as Promise<string> | AxiosPromise | Promise<ITokenResponse> | null,

  login: async (data: IAuthLoginRequest) => {
    try {
      const res = await ApiService.post<ITokenResponse>(AuthEndpointEnum.Login, data);
      authService.isLogged = true;
      if (res) {
        authService.setAccessToken(res.data);
      }
      return res.data;
    } catch (error) {
      authService.isLogged = false;
      return Promise.reject(error);
    }
  },

  register: async (data: unknown): Promise<unknown> => {
    const res = await ApiService.post(AuthEndpointEnum.Register, data);
    return res.data;
  },

  profile: async (): Promise<IUserResponse> => {
    try {
      const res = await ApiService.get<IUserResponse>(AuthEndpointEnum.Profile);
      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  logout: async () => {
    try {
      const res = await ApiService.get(AuthEndpointEnum.Logout);
      if (res) {
        authService.isLogged = false;
        authService.removeToken();
      }
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  isAuthenticated: () => {
    const accessToken = authService.getAccessToken();
    const refreshToken = authService.getRefreshToken();

    if (authService.isLogged) {
      return true;
    } else if (accessToken && refreshToken) {
      return true;
    } else {
      return false;
    }
  },

  refreshToken: async () => {
    try {
      const res = await ApiService.post<ITokenResponse>(AuthEndpointEnum.RefreshToken, {
        refreshToken: authService.getRefreshToken()
      });
      authService.setAccessToken(res.data);
      return res.data;
    } catch (error) {
      authService.isLogged = false;
      throw Promise.reject(error);
    }
  },

  setAccessToken: (data: ITokenResponse) => {
    CookieUtils.set(StorageEnum.CookieAccessToken, data.access_token, new Date(data.expire));
  },

  // setToken: (data: ITokenResponse) => {
  //   CookieUtils.set(StorageEnum.CookieAccessToken, data.accessToken, new Date(data.accessExpiredAt * 1000));
  //   CookieUtils.set(StorageEnum.CookieRefreshToken, data.refreshToken, new Date(data.refreshExpiredAt * 1000));
  // },

  getAccessToken: (): string => {
    return CookieUtils.get(StorageEnum.CookieAccessToken);
  },

  getRefreshToken: (): string => {
    return CookieUtils.get(StorageEnum.CookieRefreshToken);
  },

  removeToken: () => {
    CookieUtils.remove(StorageEnum.CookieAccessToken);
    CookieUtils.remove(StorageEnum.CookieRefreshToken);
  }
};
