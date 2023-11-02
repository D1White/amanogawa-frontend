import { SelectOption } from '@/components/Select';
import { AnimeSeasonEnum, AnimeStatusEnum, AnimeTypeEnum } from '@/types';
import { animeTypeTranslate, MIN_ANIME_YEAR, seasonTranslate, statusTranslate } from '@/utils';

export const animeTypesOptions: SelectOption[] = [
  {
    label: animeTypeTranslate[AnimeTypeEnum.tv],
    value: AnimeTypeEnum.tv,
  },
  {
    label: animeTypeTranslate[AnimeTypeEnum.movie],
    value: AnimeTypeEnum.movie,
  },
  {
    label: animeTypeTranslate[AnimeTypeEnum.ova],
    value: AnimeTypeEnum.ova,
  },
  {
    label: animeTypeTranslate[AnimeTypeEnum.special],
    value: AnimeTypeEnum.special,
  },
  {
    label: animeTypeTranslate[AnimeTypeEnum.ona],
    value: AnimeTypeEnum.ona,
  },
];

export const animeStatusOptions: SelectOption[] = [
  {
    label: statusTranslate[AnimeStatusEnum.ongoing],
    value: AnimeStatusEnum.ongoing,
  },
  {
    label: statusTranslate[AnimeStatusEnum.complete],
    value: AnimeStatusEnum.complete,
  },
  {
    label: statusTranslate[AnimeStatusEnum.upcoming],
    value: AnimeStatusEnum.upcoming,
  },
];

export const animeSeasonOptions: SelectOption[] = [
  {
    label: seasonTranslate[AnimeSeasonEnum.winter],
    value: AnimeSeasonEnum.winter,
  },
  {
    label: seasonTranslate[AnimeSeasonEnum.spring],
    value: AnimeSeasonEnum.spring,
  },
  {
    label: seasonTranslate[AnimeSeasonEnum.summer],
    value: AnimeSeasonEnum.summer,
  },
  {
    label: seasonTranslate[AnimeSeasonEnum.autumn],
    value: AnimeSeasonEnum.autumn,
  },
];

export const yearOptions = {
  min: MIN_ANIME_YEAR,
  max: new Date().getFullYear(),
};
