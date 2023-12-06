export type IToken = ITokenResponse;

export interface ITokenResponse {
  accessToken: string;
  accessExpiredAt: number;
  refreshToken: string;
  refreshExpiredAt: number;
  userAgent: string;
}
