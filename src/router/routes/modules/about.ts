import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const ABOUT: AppRouteRecordRaw = {
  path: '/about',
  name: 'about',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.about',
    requiresAuth: true,
    icon: 'icon-about',
    order: 0,
  },
  children: [
    {
      path: '/dashboards',
      name: 'dashboards',
      component: () => import('@/views/about/index.vue'),
      meta: {
        locale: 'menu.about.workplace',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    // {
    //   path: 'about',
    //   name: 'About',
    //   component: () => import('@/views/about/index.vue'),
    //   meta: {
    //     locale: 'menu.dashboard.workplace',
    //     requiresAuth: true,
    //     roles: ['*'],
    //   },
    // },
  ],
};
export default ABOUT;
