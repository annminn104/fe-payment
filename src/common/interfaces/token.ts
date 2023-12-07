export type IToken = ITokenResponse;

export interface ITokenResponse {
  access_token: string;
  expire: string;
  // accessExpiredAt: number;
  // refreshToken: string;
  // refreshExpiredAt: number;
  // userAgent: string;
}
