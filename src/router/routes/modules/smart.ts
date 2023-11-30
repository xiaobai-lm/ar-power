import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const ABOUT: AppRouteRecordRaw = {
  path: '/smart',
  name: 'smart',
  component: DEFAULT_LAYOUT,
  meta: {
    requiresAuth: true,
    icon: 'icon-about',
    order: 0,
  },
  children: [
    {
      path: '/smart',
      name: 'smart',
      component: () => import('@/views/smart/index.vue'),
      meta: {
        locale: 'menu.about.workplace',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};
export default ABOUT;
