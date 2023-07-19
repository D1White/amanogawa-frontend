import { IYoutubeVideos } from '@/types';

export const getYoutubeVideos = async (): Promise<IYoutubeVideos> => {
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCTutODdNuYVJlITO4cRC0wA&maxResults=8&order=date&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;

  const ravalidateInSeconds = 3 * 60 * 60;

  const res = await fetch(url, { next: { revalidate: ravalidateInSeconds } });

  if (!res.ok) {
    throw new Error('Failed to fetch youtube videos data');
  }

  return res.json();
};
