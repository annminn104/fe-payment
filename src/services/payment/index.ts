import { IPaymentCreateIntentRequest, IPaymentCreateIntentResponse, IPaymentHistoryRequest, IPaymentHistoryResponse } from '@/common/interfaces';
import ApiService from '../api';
import { PaymentEndpointEnum } from '@/common/enums';
import { IParametersRequest } from '../types';

export const paymentService = {
  listing: async (data: IPaymentHistoryRequest, params: IParametersRequest): Promise<IPaymentHistoryResponse> => {
    const res = await ApiService.post<IPaymentHistoryResponse>(PaymentEndpointEnum.Listing, data, { params: params });
    return res.data;
  },

  createIntent: async (data: IPaymentCreateIntentRequest): Promise<IPaymentCreateIntentResponse> => {
    const res = await ApiService.post<IPaymentCreateIntentResponse>(PaymentEndpointEnum.CreateIntent, data);
    return res.data;
  }
};
