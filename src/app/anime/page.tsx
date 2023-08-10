import cn from 'classnames';

import { Filter } from '@/features';

export default function AllAnime() {
  return (
    <main className={cn('container', 'page-offset')}>
      <Filter />
    </main>
  );
}
