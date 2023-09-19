import React, { FC, SVGProps } from 'react';

import colors from '@/styles/variables/colors/colors.module.scss';

export const CloseSmallIcon: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
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

export const CloseIcon: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke={colors.white}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M18 6l-12 12"></path>
    <path d="M6 6l12 12"></path>
  </svg>
);
