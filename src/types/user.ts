import { IAnime } from './anime';

export interface IUser {
  username: string;
  email: string;
  password: string;
  favorites: IAnime[];
}
