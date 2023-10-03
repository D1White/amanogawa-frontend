import { IEpisode } from './episode';
import { IGenre } from './genre';

export enum AnimeTypeEnum {
  tv = 'tv',
  movie = 'movie',
  ova = 'ova',
  special = 'special',
  ona = 'ona',
  music = 'music',
}

export enum AnimeStatusEnum {
  ongoing = 'ongoing',
  complete = 'complete',
  upcoming = 'upcoming',
}

export enum AnimeSeasonEnum {
  winter = 'winter',
  spring = 'spring',
  summer = 'summer',
  autumn = 'autumn',
}

interface IAnimeBase {
  _id: string;
  title: string;
  title_english: string;
  title_japanese: string;
  slug: string;
  image: string;
  synopsis: string;
  type: AnimeTypeEnum;
  status: AnimeStatusEnum;
  year: number;
  season: AnimeSeasonEnum;
  group?: string;
  name_in_group?: string;
  episodes_total?: string;
  myanime_id?: number;
  rating?: number;
  rating_count?: number;
  views?: number;
  created_at: string;
  updated_at: string;
}

export interface IAnime extends IAnimeBase {
  genres: string[];
  episodes?: string[];
}

export interface IAnimeFull extends IAnimeBase {
  genres: IGenre[];
  episodes?: IEpisode[];
}

export interface IAnimeGroup
  extends Pick<
    IAnimeBase,
    '_id' | 'title' | 'slug' | 'year' | 'season' | 'group' | 'name_in_group' | 'created_at'
  > {}
