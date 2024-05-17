import {
  AnimeSeasonEnum,
  AnimeStatusEnum,
  AnimeTypeEnum,
  IAnime,
  IAnimeFull,
  IEpisode,
  IUser,
} from '@/types';

export enum AnimeSortField {
  views = 'views',
  createdAt = 'created_at',
}

export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface IAnimeParams {
  skip?: number;
  limit?: number;
  type?: AnimeTypeEnum;
  status?: AnimeStatusEnum;
  season?: AnimeSeasonEnum;
  min_year?: number;
  max_year?: number;
  genres?: string[];
  search?: string;
  sort_field?: AnimeSortField;
  sort_direction?: SortDirection;
}

export interface IAnimeResponse {
  items: IAnime[];
  total: number;
  limit: number;
  pages: number;
  page: number;
}

export interface IAnimeYearsResponse {
  _id: null;
  max_year: number;
  min_year: number;
}

export interface IEpisodeResponse extends IEpisode {
  anime?: Pick<IAnimeFull, '_id' | 'title' | 'slug' | 'synopsis' | 'episodes' | 'created_at'>;
}

// Auth

export interface LoginReq {
  email: string;
  password: string;
}

export interface SignUpReq extends LoginReq {
  username: string;
}

// User

export interface UpdateUserReq
  extends Partial<Pick<IUser, 'username' | 'email' | 'password' | 'isPublic'>> {}

// Search

export interface SearchRes {
  anime: IAnime[];
  users: Pick<IUser, '_id' | 'username'>[];
}

// Other

export interface ErrorRes {
  error: string;
  message: string;
  statusCode: number;
}
