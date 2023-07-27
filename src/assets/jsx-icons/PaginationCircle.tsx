import React, { FC, SVGProps } from 'react';

import colors from '@/styles/variables/colors/colors.module.scss';

export const PaginationActiveCircle: FC<SVGProps<SVGSVGElement>> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM6.4925 12C6.4925 15.0417 8.95829 17.5075 12 17.5075C15.0417 17.5075 17.5075 15.0417 17.5075 12C17.5075 8.95829 15.0417 6.4925 12 6.4925C8.95829 6.4925 6.4925 8.95829 6.4925 12Z"
      fill={colors.primary}
    />
  </svg>
);

export const PaginationCircle: FC<SVGProps<SVGSVGElement>> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill={colors.primary} fillOpacity="0.3" />
  </svg>
);
