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
