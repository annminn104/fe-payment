import { IBodyRequest, IDataPaginationResponse, IOrder } from '@/services/types';

export interface IUserResponse {
  isAdmin: boolean;
  deletedAt: Date | null;
  fullName: string;
  username: string;
  tokenExpiredDate: string;
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export type IUser = IUserResponse;

export interface IUserListQueryFields {
  id: string;
  username: string;
  fullName: string;
}

export interface IUserOrderFields {
  id: IOrder;
  username: IOrder;
  createdAt: IOrder;
}

export type IUserListingRequest = IBodyRequest<IUserListQueryFields, IUserOrderFields, undefined>;

export interface IUserListItem {
  _id: string;
  fullName: string;
  username: string;
  id: string;
  createdAt: Date | string;
}

export type IUserListResponse = IDataPaginationResponse<IUserListItem>;

export type IUserList = IUserListItem[];

export type IUserListTableData = Pick<IUserListItem, 'fullName' | 'username' | 'id' | 'createdAt'>;

export interface IUserCreateRequest {
  fullName: string;
  username: string;
  password: string;
}

export interface IUserFormCreateRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface IUserDeleteManyRequest {
  ids: string[];
}
