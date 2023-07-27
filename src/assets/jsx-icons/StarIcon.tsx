import React, { FC, SVGProps } from 'react';

import colors from '@/styles/variables/colors/colors.module.scss';

export const StarIcon: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <path
      d="M7.52181 2.3022C7.67546 1.99091 7.75229 1.83526 7.85659 1.78553C7.94734 1.74227 8.05276 1.74227 8.14351 1.78553C8.24781 1.83526 8.32464 1.99091 8.47829 2.3022L9.93608 5.25551C9.98144 5.34741 10.0041 5.39336 10.0373 5.42904C10.0666 5.46063 10.1018 5.48622 10.1409 5.5044C10.1851 5.52494 10.2358 5.53235 10.3372 5.54717L13.598 6.02379C13.9414 6.07398 14.1131 6.09908 14.1926 6.18295C14.2617 6.25592 14.2942 6.35619 14.281 6.45584C14.2659 6.57037 14.1416 6.69144 13.893 6.93358L11.5343 9.23093C11.4608 9.30255 11.424 9.33836 11.4003 9.38096C11.3793 9.41869 11.3658 9.46013 11.3606 9.50299C11.3548 9.5514 11.3635 9.60198 11.3808 9.70315L11.9373 12.9481C11.996 13.2903 12.0254 13.4614 11.9702 13.563C11.9222 13.6513 11.8369 13.7133 11.7381 13.7316C11.6245 13.7527 11.4708 13.6719 11.1634 13.5103L8.24829 11.9772C8.15746 11.9294 8.11205 11.9056 8.0642 11.8962C8.02184 11.8879 7.97826 11.8879 7.9359 11.8962C7.88805 11.9056 7.84264 11.9294 7.75181 11.9772L4.83666 13.5103C4.52932 13.6719 4.37565 13.7527 4.26202 13.7316C4.16316 13.7133 4.07786 13.6513 4.02987 13.563C3.97471 13.4614 4.00406 13.2903 4.06276 12.9481L4.6193 9.70315C4.63665 9.60198 4.64532 9.5514 4.63945 9.50299C4.63426 9.46013 4.62078 9.41869 4.59978 9.38096C4.57606 9.33836 4.53929 9.30255 4.46576 9.23093L2.10708 6.93358C1.85848 6.69144 1.73418 6.57037 1.71906 6.45584C1.7059 6.35619 1.73841 6.25592 1.80754 6.18295C1.887 6.09908 2.05869 6.07398 2.40207 6.02379L5.66291 5.54717C5.76432 5.53235 5.81503 5.52494 5.85918 5.5044C5.89828 5.48622 5.93348 5.46063 5.96283 5.42904C5.99598 5.39336 6.01866 5.34741 6.06402 5.25551L7.52181 2.3022Z"
      fill={colors.white}
    />
  </svg>
);