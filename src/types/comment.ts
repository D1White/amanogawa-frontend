import { IUser } from './user';

export interface IComment {
  _id: string;
  anime: string;
  user: Pick<IUser, '_id' | 'username'>;
  text: string;
  created_at: string;
}
