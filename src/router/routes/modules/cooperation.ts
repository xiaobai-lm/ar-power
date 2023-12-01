import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const ABOUT: AppRouteRecordRaw = {
  path: '/cooperation',
  name: 'cooperation',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.cooperation',
    requiresAuth: true,
    icon: 'icon-about',
    order: 0,
  },
  children: [
    {
      path: '/cooperation',
      name: 'cooperation',
      component: () => import('@/views/cooperation/index.vue'),
      meta: {
        locale: 'menu.about.workplace',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};
export default ABOUT;
