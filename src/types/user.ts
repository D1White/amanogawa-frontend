import { IAnime } from './anime';

export interface AuthTokens {
  access_token: string;
  refresh_token: string;
}
export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  favorites: IAnime[];
  refresh_token: string;
}
