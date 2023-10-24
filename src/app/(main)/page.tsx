import 'swiper/css';
import 'swiper/css/pagination';

import { cookies } from 'next/headers';

import { NewAnime, TrendingAnime, YoutubeVideos } from '@/features';

export default async function Home() {
  const cookieStore = cookies();
  console.log('[INFO] all cookies', cookieStore.getAll());

  return (
    <main className="container">
      <NewAnime />

      <TrendingAnime />

      <YoutubeVideos />
    </main>
  );
}
