import React, { FC, SVGProps } from 'react';

import colors from '@/styles/variables/colors/colors.module.scss';

export const MenuIcon: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M3 12H21M3 6H21M3 18H15"
      stroke={colors.white}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
