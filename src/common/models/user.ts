import { UserRoleEnum } from '../enums';
import { IUser } from '../interfaces';
import { TimeUtils } from '../utils';

export class User {
  id: string;
  username: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  doB: Date | string;
  role: UserRoleEnum;

  constructor(user: IUser) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.phone = user.phone;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.doB = TimeUtils.toDateTime(new Date(user.doB));
    this.role = user.role;
  }

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
