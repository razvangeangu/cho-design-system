/**
 *
 * Asynchronously loads the component for AnchorHeader
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AnchorHeader = lazyLoad(
  () => import('./index'),
  module => module.AnchorHeader,
);
