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

export interface IAnime {
  _id: string;
  title: string;
  title_english: string;
  title_japanese: string;
  slug: string;
  image: string;
  synopsis: string;
  type: AnimeTypeEnum;
  status: AnimeStatusEnum;
  genres: string[];
  year: number;
  season: AnimeSeasonEnum;
  group?: string;
  name_in_group?: string;
  episodes_total?: string;
  episodes?: string[];
  myanime_id?: number;
  score?: number;
  views?: number;
  created_at: string;
  updated_at: string;
}
