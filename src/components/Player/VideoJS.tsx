'use client';

import 'video.js/dist/video-js.css';
import './player.scss';

import React, { FC, memo, useEffect, useRef } from 'react';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';

import { VideoJSIcons } from '@/assets/jsx-icons';

interface VideoJSProps {
  options: any;
  onReady?: (player: Player) => void;
}

export const VideoJS: FC<VideoJSProps> = memo(({ options, onReady }) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      const videoElement = document.createElement('video-js');

      videoElement.classList.add('vjs-big-play-centered');

      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      }));
    } else {
      const player = playerRef.current;

      if (player) {
        player.autoplay(options.autoplay);
        player.src(options.sources);
      }
    }
  }, [options, videoRef]);

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} id="vjs-amanogawa">
        <VideoJSIcons />
      </div>
    </div>
  );
});

VideoJS.displayName = 'VideoJS';
