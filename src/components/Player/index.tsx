'use client';

import React, { FC, memo, useCallback, useRef } from 'react';
import PlayerType from 'video.js/dist/types/player';

import { IEpisode } from '@/types';
import { videoJSDefaultOptions } from '@/utils/videojs';

import { VideoJS } from './VideoJS';

interface PlayerProps {
  data: IEpisode;
}

const Player: FC<PlayerProps> = memo(({ data }) => {
  const playerRef = useRef<PlayerType | null>(null);

  const options = {
    ...videoJSDefaultOptions,
    sources: [
      {
        src: data.hight,
        type: 'application/x-mpegURL',
      },
    ],
    tracks: [
      {
        src: data.subtitles,
        srclang: 'uk',
        label: 'Inscriptions',
      },
      ...(data?.subtitles_full
        ? [
            {
              src: data.subtitles_full,
              srclang: 'uk',
              label: 'Full',
            },
          ]
        : []),
    ],
  };

  const handlePlayerReady = useCallback((player: PlayerType) => {
    playerRef.current = player;

    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  }, []);

  return <VideoJS options={options} onReady={handlePlayerReady} />;
});

Player.displayName = 'Player';

export default Player;
