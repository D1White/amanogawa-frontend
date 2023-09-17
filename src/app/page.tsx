import 'swiper/css';
import 'swiper/css/pagination';

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
