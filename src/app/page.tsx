import 'swiper/css';

import { NewAnime, TrendingAnime, YoutubeVideos } from '@/features';

export default function Home() {
  return (
    <main className="container">
      <NewAnime />

      <TrendingAnime />

      <YoutubeVideos />
    </main>
  );
}
