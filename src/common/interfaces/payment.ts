import { IBodyRequest, IDataPaginationResponse, IOrder } from '@/services/types';

export interface IPaymentHistoryItem {
  _id: string;
  deletedAt: Date | string | null;
  user: IPaymentHistoryUser[];
  fullName: string;
  amount: number;
  status: boolean;
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export type IPaymentHistoryListTableData = Pick<IPaymentHistoryItem, 'id' | 'fullName' | 'amount' | 'createdAt' | 'status' | 'user'>;

export interface IPaymentHistoryUser {
  _id: string;
  fullName: string;
  username: string;
  id: string;
}

export interface IPaymentQueryFields {
  id: string;
  user: string;
  status: boolean;
}

export interface IPaymentHistoryOrderFields {
  id: IOrder;
  amount: IOrder;
  createdAt: IOrder;
  status: IOrder;
}

export type IPaymentHistoryRequest = IBodyRequest<IPaymentQueryFields, IPaymentHistoryOrderFields, unknown>;

export type IPaymentHistoryResponse = IDataPaginationResponse<IPaymentHistoryItem>;

export type IPaymentHistory = IPaymentHistoryItem[];

export interface IPaymentCreateIntentRequest {
  amount: number;
}

export interface IPaymentCreateIntentResponse {
  clientSecret: string;
}
