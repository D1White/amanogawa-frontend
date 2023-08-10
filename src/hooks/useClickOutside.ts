'use client';

import React, { RefObject, useEffect, useRef } from 'react';

export const useClickOutside = <T extends HTMLElement>(callback: () => void): RefObject<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClick = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref]);

  return ref;
};
