import { AxiosResponse } from 'axios';

export function ResponseInterceptorFulfilled(response: AxiosResponse<AxiosResponse<unknown, unknown>>): AxiosResponse {
  return response.data;
}
