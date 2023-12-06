import axios, { AxiosError } from 'axios';
import { HttpStatusCodeEnum } from '../enums';
import { IErrorResponse } from '../interfaces';

export class AxiosUtils {
  static isAxiosError<T>(error: unknown): error is AxiosError<T> {
    return axios.isAxiosError(error);
  }

  static isAxiosUnprocessableEntityError<FormError>(error: unknown): error is AxiosError<FormError> {
    return this.isAxiosError(error) && error.response?.status === HttpStatusCodeEnum.UnprocessableEntity;
  }

  static isAxiosUnauthorizedError<UnauthorizedError>(error: unknown): error is AxiosError<UnauthorizedError> {
    return this.isAxiosError(error) && error.response?.status === HttpStatusCodeEnum.Unauthorized;
  }

  static isAxiosExpiredTokenError<UnauthorizedError>(error: unknown): error is AxiosError<UnauthorizedError> {
    return (
      this.isAxiosUnauthorizedError<IErrorResponse<{ name: string; message: string }>>(error) && error.response?.data?.data?.name === 'EXPIRED_TOKEN'
    );
  }
}
