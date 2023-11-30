import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const ABOUT: AppRouteRecordRaw = {
  path: '/carbon',
  name: 'carbon',
  component: DEFAULT_LAYOUT,
  meta: {
    requiresAuth: true,
    icon: 'icon-about',
    order: 0,
  },
  children: [
    {
      path: '/carbon',
      name: 'carbon',
      component: () => import('@/views/carbon/index.vue'),
      meta: {
        locale: 'menu.about.workplace',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: '/carbon/report',
      name: 'report',
      component: () => import('@/views/carbon/components/report.vue'),
      meta: {
        locale: 'menu.about.workplace',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};
export default ABOUT;
