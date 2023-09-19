import React, { useEffect } from 'react';

export const useTogglePageNoScroll = (active: boolean) => {
  useEffect(() => {
    if (document) {
      if (active) {
        document.documentElement.classList.add('no-scroll');
      } else {
        document.documentElement.classList.remove('no-scroll');
      }
    }
  }, [active]);
};
