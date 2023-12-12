import { UserEndPointEnum } from '@/common/enums';
import ApiService from '../api';
import { IParametersRequest } from '../types';
import { IUserCreateRequest, IUserDeleteManyRequest, IUserListResponse, IUserListingRequest } from '@/common/interfaces';

export const userService = {
  listing: async (data: IUserListingRequest, params: IParametersRequest): Promise<IUserListResponse> => {
    const res = await ApiService.post<IUserListResponse>(UserEndPointEnum.Listing, data, { params: params });
    return res.data;
  },

  create: async (data: IUserCreateRequest): Promise<unknown> => {
    const res = await ApiService.post<IUserListResponse>(UserEndPointEnum.Create, data);
    return res.data;
  },

  deleteMany: async (data: IUserDeleteManyRequest): Promise<unknown> => {
    const res = await ApiService.post<IUserDeleteManyRequest>(UserEndPointEnum.Delete, data);
    return res.data;
  }
};

export default userService;
