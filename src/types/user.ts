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
  created_at: string;
  updated_at: string;
  isPublic: boolean;
}

export interface IPublicUser extends Pick<IUser, '_id' | 'username' | 'isPublic'> {}
