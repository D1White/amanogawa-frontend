export interface AuthTokens {
  access_token: string;
  refresh_token: string;
}
export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  favorites: string[];
  refresh_token: string;
}
