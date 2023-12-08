export interface IPagination {
  page: string | number;
  size: string | number;
  total?: number;
  sizeOptions?: number[];
}
export interface IDateTime {
  startTime?: Date | string;
  endTime?: Date | string;
}

export type IPaginationRequest = Pick<IPagination, 'page' | 'size'>;
export type IParametersRequest = IPaginationRequest & IDateTime;

type IOrder = 1 | -1;

type RequiredOrUndefined<T> = {
  [K in keyof T | string]-?: T[K] | undefined;
};

export interface IBodyRequest<T, U, Z> {
  searchString?: string;
  queryFields?: Partial<RequiredOrUndefined<T>>;
  orderFields?: {
    [key in keyof U]?: IOrder;
  };
  customFilter?: Partial<RequiredOrUndefined<Z>>;
}

export interface IDataPaginationResponse<T> {
  total: number;
  results: T[];
}
