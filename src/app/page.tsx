import 'swiper/css';

import { AnimeCard } from '@/components';
import { YoutubeVideos } from '@/features';
import { AnimeStatusEnum } from '@/types';

export default function Home() {
  return (
    <main className="container">
      <AnimeCard
        title="Doctor Stone: New World"
        episodes={40}
        image="https://amanogawa.fra1.cdn.digitaloceanspaces.com/chainsaw-man/poster.jpg"
        status={AnimeStatusEnum.ongoing}
        slug="test"
        score={4.7}
      />

      <YoutubeVideos />
    </main>
  );
}
