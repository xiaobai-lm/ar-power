import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const ABOUT: AppRouteRecordRaw = {
  path: '/dataAnalysis',
  name: 'dataAnalysis',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.dataAnalysis',
    requiresAuth: true,
    icon: 'icon-about',
    order: 0,
  },
  children: [
    {
      path: '/dataAnalysis',
      name: 'dataAnalysis',
      component: () => import('@/views/dataAnalysis/index.vue'),
      meta: {
        locale: 'menu.dataAnalysis',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};
export default ABOUT;
