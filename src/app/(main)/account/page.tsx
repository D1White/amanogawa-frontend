import cn from 'classnames';

import { Profile } from '@/features';
import blocksStyles from '@/styles/variables/blocks/blocks.module.scss';

export default async function Account() {
  return (
    <main className={cn('container', 'page-offset', blocksStyles.flexCentered)}>
      <Profile />
    </main>
  );
}
