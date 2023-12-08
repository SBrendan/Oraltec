import type { Metadata } from 'next';

import Maintenance from '~/lib/pages/maintenance';

export const metadata: Metadata = {
  title: 'Maintenance',
  robots: { index: false, follow: false },
};

export default Maintenance;
