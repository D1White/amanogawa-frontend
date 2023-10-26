import 'normalize.css';
import '@/styles/global.scss';

import cn from 'classnames';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { ReactQueryProvider } from '@/providers';

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
  title: 'Amanogawa – Українська аніме-спільнота, аніме українською',
  description:
    "Спільнота Аманоґава – ми перекладаємо та озвучуємо аніме, збираємо інформацію та новини про аніме та Японію, висвітлюємо різноманітні анімешні та пов'язані з ними події в Україні та за її межами, прагнемо просувати ліцензійну манґу та манхву і ще робимо купу-купу всього іншого, до чого можемо дотягнутися і до чого маємо натхнення",
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
