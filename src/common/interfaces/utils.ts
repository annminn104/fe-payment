export interface ISuccessResponse<T> {
  message: string;
  data: T;
}
export interface IErrorResponse<T> {
  message: string;
  data?: T;
}

export type INoUndefinedField<T> = {
  [P in keyof T]-?: INoUndefinedField<NonNullable<T[P]>>;
};
