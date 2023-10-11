import { SelectOption } from '@/components/Select';
import { AnimeSeasonEnum, AnimeStatusEnum, AnimeTypeEnum } from '@/types';
import { MIN_ANIME_YEAR } from '@/utils';

export const animeTypesOptions: SelectOption[] = [
  {
    label: 'TV',
    value: AnimeTypeEnum.tv,
  },
  {
    label: 'Movie',
    value: AnimeTypeEnum.movie,
  },
  {
    label: 'OVA',
    value: AnimeTypeEnum.ova,
  },
  {
    label: 'Special',
    value: AnimeTypeEnum.special,
  },
  {
    label: 'ONA',
    value: AnimeTypeEnum.ona,
  },
];

export const animeStatusOptions: SelectOption[] = [
  {
    label: 'Ongoing',
    value: AnimeStatusEnum.ongoing,
  },
  {
    label: 'Complete',
    value: AnimeStatusEnum.complete,
  },
  {
    label: 'Upcoming',
    value: AnimeStatusEnum.upcoming,
  },
];

export const animeSeasonOptions: SelectOption[] = [
  {
    label: 'Winter',
    value: AnimeSeasonEnum.winter,
  },
  {
    label: 'Spring',
    value: AnimeSeasonEnum.spring,
  },
  {
    label: 'Summer',
    value: AnimeSeasonEnum.summer,
  },
  {
    label: 'Autumn',
    value: AnimeSeasonEnum.autumn,
  },
];

export const yearOptions = {
  min: MIN_ANIME_YEAR,
  max: new Date().getFullYear(),
};
