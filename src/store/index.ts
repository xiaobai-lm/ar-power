import { createPinia } from 'pinia';
import useAppStore from './modules/app';
import useUserStore from './modules/user';
import useTabBarStore from './modules/tab-bar';
import useUserDataList from './modules/data';


const pinia = createPinia();

export { useAppStore, useUserStore, useTabBarStore, useUserDataList };
export default pinia;
