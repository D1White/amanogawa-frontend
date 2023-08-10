import React, { FC, SVGProps } from 'react';

import colors from '@/styles/variables/colors/colors.module.scss';

export const SettingsIcon: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M19 22V11M19 7V2M12 22V17M12 13V2M5 22V11M5 7V2M3 11H7M17 11H21M10 13H14"
      stroke={colors.white}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
