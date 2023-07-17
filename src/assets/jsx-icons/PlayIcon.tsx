import React, { FC, SVGProps } from 'react';

import colors from '@/styles/variables/colors/colors.module.scss';

export const PlayIcon: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_272_2183)">
      <path
        d="M15.6922 8.60872C17.2415 9.57777 18.3051 10.2462 18.9957 10.8353C19.6744 11.4143 19.7855 11.7451 19.7855 12C19.7855 12.2549 19.6744 12.5857 18.9957 13.1647C18.3051 13.7538 17.2415 14.4222 15.6922 15.3913L12.1211 17.6248C10.4009 18.7008 9.20681 19.4445 8.28419 19.8475C7.36615 20.2485 7.00035 20.1839 6.77307 20.058C6.54578 19.9321 6.29711 19.6562 6.15025 18.6652C6.00267 17.6693 6 16.2626 6 14.2336L6 9.76645C6 7.73742 6.00267 6.3307 6.15025 5.33479C6.29711 4.34381 6.54579 4.0679 6.77307 3.94197C7.00035 3.81605 7.36615 3.75154 8.28419 4.15252C9.20681 4.55551 10.4009 5.29921 12.1211 6.37516L15.6922 8.60872Z"
        fill={colors.white}
        stroke={colors.white}
        strokeWidth="2"
      />
    </g>
    <defs>
      <clipPath id="clip0_272_2183">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
