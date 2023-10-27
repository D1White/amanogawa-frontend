import 'normalize.css';
import '@/styles/global.scss';

import cn from 'classnames';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { ReactQueryProvider } from '@/providers';
import { metaTexts } from '@/utils';

const fixel = localFont({
  src: [
    { path: '../assets/fonts/Fixel/FixelDisplay-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../assets/fonts/Fixel/FixelDisplay-Medium.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-fixel',
});

const kyivRegion = localFont({
  src: [
    { path: '../assets/fonts/KyivRegion/KyivRegion-Regular.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-kyiv-region',
});

export const metadata: Metadata = {
  title: metaTexts.global.title,
  description: metaTexts.global.description,
  openGraph: {
    title: metaTexts.global.title,
    description: metaTexts.global.description,
  },
  applicationName: metaTexts.global.shortTitle,
  keywords: metaTexts.global.keywords,
  themeColor: '#0063f2',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <ReactQueryProvider>
        <body className={cn(fixel.variable, kyivRegion.variable)}>{children}</body>
      </ReactQueryProvider>
    </html>
  );
}
