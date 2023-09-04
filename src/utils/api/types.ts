import { AnimeSeasonEnum, AnimeStatusEnum, AnimeTypeEnum, IAnime } from '@/types';

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
