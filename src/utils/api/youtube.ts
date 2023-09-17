import { IYoutubeVideos } from '@/types';

export const getYoutubeVideos = async (): Promise<IYoutubeVideos | null> => {
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCTutODdNuYVJlITO4cRC0wA&maxResults=8&order=date&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;

  const revalidateInSeconds = 12 * 60 * 60;

  const res = await fetch(url, { next: { revalidate: revalidateInSeconds } });

  console.log(res);

  if (!res.ok) {
    return null;
  }

  return res.json();
};
