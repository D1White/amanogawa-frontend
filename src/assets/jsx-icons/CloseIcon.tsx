import React, { FC, SVGProps } from 'react';

import colors from '@/styles/variables/colors/colors.module.scss';

export const CloseIcon: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M7.75736 7.75735L16.2426 16.2426M7.75736 16.2426L16.2426 7.75735"
      stroke={colors.white}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
