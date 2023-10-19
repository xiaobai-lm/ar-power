<template>
  <a-layout class="layout" :class="{ mobile: appStore.hideMenu }">
    <a-layout-header class="layout-navbar">
      <NavBar />
    </a-layout-header>
    <a-layout>
      <a-layout>
        <a-layout class="layout-content">
          <TabBar v-if="appStore.tabBar" />
          <a-layout-content>
            <PageLayout />
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
    <a-layout-footer>
      <Footer />
      <!-- <div style="height: 50px; line-height: 50px; text-align: center; color: white">
        Arco Design
      </div> -->
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts" setup>
import { ref, computed, watch, provide, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAppStore, useUserStore } from "@/store";
import NavBar from "@/components/navbar/index.vue";
import Footer from "@/components/footer/index.vue";
import TabBar from "@/components/tab-bar/index.vue";
import usePermission from "@/hooks/permission";
import useResponsive from "@/hooks/responsive";
import PageLayout from "./page-layout.vue";

const isInit = ref(false);
const appStore = useAppStore();
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();
const permission = usePermission();
useResponsive(true);
const navbarHeight = `60px`;
const navbar = computed(() => appStore.navbar);
const renderMenu = computed(() => appStore.menu && !appStore.topMenu);
const hideMenu = computed(() => appStore.hideMenu);
const footer = computed(() => appStore.footer);
const menuWidth = computed(() => {
  return appStore.menuCollapse ? 48 : appStore.menuWidth;
});
const collapsed = computed(() => {
  return appStore.menuCollapse;
});
const paddingStyle = computed(() => {
  const paddingLeft =
    renderMenu.value && !hideMenu.value ? { paddingLeft: `${menuWidth.value}px` } : {};
  const paddingTop = navbar.value ? { paddingTop: navbarHeight } : {};
  return { ...paddingLeft, ...paddingTop };
});
const setCollapsed = (val: boolean) => {
  if (!isInit.value) return; // for page initialization menu state problem
  appStore.updateSettings({ menuCollapse: val });
};
watch(
  () => userStore.role,
  (roleValue) => {
    if (roleValue && !permission.accessRouter(route)) router.push({ name: "notFound" });
  }
);
const drawerVisible = ref(false);
const drawerCancel = () => {
  drawerVisible.value = false;
};
provide("toggleDrawerMenu", () => {
  drawerVisible.value = !drawerVisible.value;
});
onMounted(() => {
  isInit.value = true;
});
</script>

<style scoped lang="less">
.layout-demo {
  height: 500px;
  background: var(--color-fill-2);
  border: 1px solid var(--color-border);
}

.layout-demo :deep(.arco-layout-sider) .logo {
  height: 32px;
  margin: 12px 8px;
  background: red;
}

.layout-demo :deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-2);
}

.layout-demo :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: var(--color-bg-3);
}

.layout-demo :deep(.arco-layout-footer) {
  height: 48px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
}

.layout-demo :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}

.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}

@nav-size-height: 60px;
@layout-max-width: 1100px;

.layout {
  width: 100%;
  height: 100%;
}

.layout-navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: @nav-size-height;
}

.layout-sider {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  height: 100%;
  transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);

  &::after {
    position: absolute;
    top: 0;
    right: -1px;
    display: block;
    width: 1px;
    height: 100%;
    background-color: var(--color-border);
    content: "";
  }

  > :deep(.arco-layout-sider-children) {
    overflow-y: hidden;
  }
}

.menu-wrapper {
  height: 100%;
  overflow: auto;
  overflow-x: hidden;

  :deep(.arco-menu) {
    ::-webkit-scrollbar {
      width: 12px;
      height: 4px;
    }

    ::-webkit-scrollbar-thumb {
      border: 4px solid transparent;
      background-clip: padding-box;
      border-radius: 7px;
      background-color: var(--color-text-4);
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: var(--color-text-3);
    }
  }
}

.layout-content {
  min-height: 100%;
  overflow-y: hidden;
  background-color: var(--color-fill-2);
  transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  margin-top: 60px;
}</style>
