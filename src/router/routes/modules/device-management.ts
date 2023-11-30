import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const ABOUT: AppRouteRecordRaw = {
  path: '/device',
  name: 'device',
  component: DEFAULT_LAYOUT,
  meta: {
    requiresAuth: true,
    icon: 'icon-about',
    order: 0,
  },
  children: [
    {
      path: '/device',
      name: 'device',
      component: () => import('@/views/device-management/index.vue'),
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
