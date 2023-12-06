import { UserRoleEnum } from '../enums';

export interface IUserResponse {
  id: string;
  username: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  doB: Date | string;
  role: UserRoleEnum;
}

export type IUser = IUserResponse;
