<template>
  <div class="demo">
    <a-menu
      mode="horizontal"
      :default-selected-keys="selectKey"
      :default-open-keys="['0']"
    >
      <a-menu-item v-for="item in List" :key="item.id" @click="handleClick(item)">
        {{ item.title }}
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const selectKey = ref(null);
const router = useRouter();
const List = ref([
  {
    title: "平台中心",
    id: "0",
  },
  {
    title: "安全运行",
    id: "1",
  },
  {
    title: "智慧能源",
    id: "2",
  },
  {
    title: "需求侧",
    id: "3",
  },
  {
    title: "碳管理",
    id: "4",
  },
  {
    title: "数据分析",
    id: "5",
  },
  {
    title: "资产管理",
    id: "6",
  },
  {
    title: "运维管理",
    id: "7",
  },
  {
    title: "系统设置",
    id: "8",
  },
]);

const handleClick = (item) => {
  // router.push({ path: "/about" });
  if (item.id === "0") {
    router.push({ path: "/dashboard/workplace" });
  } else if (item.id === "1") {
    router.push({ path: "about" });
  } else if (item.id === "2") {
    router.push({ path: "/dashboard/cloud-service" });
  } else {
    router.push({ path: "/dashboard/cooperation" });
  }
};
</script>

<style lang="less">
.arco-menu-overflow-wrap {
  text-align: center;
}
.arco-menu-horizontal .arco-menu-item:not(:first-child),
.arco-menu-horizontal .arco-menu-pop:not(:first-child) {
  margin-left: 0 !important;
}
</style>
