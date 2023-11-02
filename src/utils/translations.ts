import { AnimeSeasonEnum, AnimeStatusEnum, AnimeTypeEnum } from '@/types';

export const seasonTranslate: Record<AnimeSeasonEnum, string> = {
  [AnimeSeasonEnum.winter]: 'Зимовий',
  [AnimeSeasonEnum.spring]: 'Весняний',
  [AnimeSeasonEnum.summer]: 'Літній',
  [AnimeSeasonEnum.autumn]: 'Осінній',
};

export const statusTranslate: Record<AnimeStatusEnum, string> = {
  [AnimeStatusEnum.ongoing]: 'Онгоінг',
  [AnimeStatusEnum.complete]: 'Завершено',
  [AnimeStatusEnum.upcoming]: 'Анонс',
};

export const animeTypeTranslate: Record<AnimeTypeEnum, string> = {
  [AnimeTypeEnum.tv]: 'ТВ',
  [AnimeTypeEnum.movie]: 'Фільм',
  [AnimeTypeEnum.ova]: 'OVA',
  [AnimeTypeEnum.special]: 'Спешл',
  [AnimeTypeEnum.ona]: 'ONA',
  [AnimeTypeEnum.music]: 'Музика',
};
