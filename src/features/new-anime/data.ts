import { AnimeSeasonEnum, AnimeStatusEnum, AnimeTypeEnum, IAnime } from '@/types';

const testItem: IAnime = {
  _id: '64ab4e3d2d903f9fad17d2c7',
  title: 'Людина-Бензопила',
  title_english: 'Chainsaw Man',
  title_japanese: 'チェンソーマン',
  slug: 'chainsaw-man',
  image: 'https://amanogawa.fra1.cdn.digitaloceanspaces.com/chainsaw-man/poster.jpg',
  synopsis:
    "Denji is robbed of a normal teenage life, left with nothing but his deadbeat father's overwhelming debt. His only companion is his pet, the chainsaw devil Pochita, with whom he slays devils for money that inevitably ends up in the yakuza's pockets. All Denji can do is dream of a good, simple life: one with delicious food and a beautiful girlfriend by his side. But an act of greedy betrayal by the yakuza leads to Denji's brutal, untimely death, crushing all hope of him ever achieving happiness.\n\nRemarkably, an old contract allows Pochita to merge with the deceased Denji and bestow devil powers on him, changing him into a hybrid able to transform his body parts into chainsaws. Because Denji's new abilities pose a significant risk to society, the Public Safety Bureau's elite devil hunter Makima takes him in, letting him live as long as he obeys her command. Guided by the promise of a content life alongside an attractive woman, Denji devotes everything and fights with all his might to make his naive dreams a reality.\n\n[Written by MAL Rewrite]",
  type: AnimeTypeEnum.tv,
  status: AnimeStatusEnum.complete,
  genres: ['63b8c847e238ca3b182a9b32'],
  year: 2022,
  season: AnimeSeasonEnum.autumn,
  episodes_total: '12',
  episodes: ['64ab4ef82d903f9fad17d2cc', '64ab4ff331d42968c50c9bd8'],
  myanime_id: 44511,
  score: 4.7,
  views: 3,
  created_at: '2023-07-10T00:18:05.524Z',
  updated_at: '2023-07-10T00:25:51.133Z',
};

export const data = [
  testItem,
  { ...testItem, title: testItem.title + ' 2' },
  { ...testItem, title: testItem.title + ' 3' },
  { ...testItem, title: testItem.title + ' 4' },
  { ...testItem, title: testItem.title + ' 5' },
];
