<template>
  <div>
    <a-layout-sider>
      <a-menu
        :style="{ width: '200px', borderRadius: '4px' }"
        :collapsed="collapsed"
        :default-open-keys="['0']"
        :default-selected-keys="['0_0']"
      >
        <a-sub-menu v-for="List in ListValue" :key="List.id">
          <template #icon><icon-bug></icon-bug></template>
          <template #title>{{ List.title }}</template>
          <a-menu-item
            v-for="item in List.ListValue2"
            :key="item.id"
            @click="handleClick(item)"
            >{{ item.first }}</a-menu-item
          >
        </a-sub-menu>
      </a-menu>
      <!-- trigger -->
      <template #trigger="{ collapsed }">
        <IconCaretRight v-if="collapsed"></IconCaretRight>
        <IconCaretLeft v-else></IconCaretLeft>
      </template>
    </a-layout-sider>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const items = [{ title: "One" }];
const ListValue = [
  {
    title: "首页",
    id: "0",
    ListValue2: [
      {
        first: "12",
        id: "0_0",
      },
      {
        first: "24",
        id: "0_1",
      },
      {
        first: "36",
        id: "0_2",
      },
      {
        first: "48",
        id: "0_3",
      },
      {
        first: "60",
        id: "0_4",
      },
    ],
  },
  {
    title: "第二页",
    id: "1",
    ListValue2: [
      {
        first: "1",
        id: "1_0",
      },
      {
        first: "2",
        id: "1_1",
      },
      {
        first: "3",
        id: "1_2",
      },
      {
        first: "4",
        id: "1_3",
      },
    ],
  },
];

const handleClick = (item) => {
  if (item.id === "0_0") {
    router.push({ path: "/dashboard/workplace" });
  } else if (item.id === "0_1") {
    router.push({ path: "/dashboard/workplace/homeView" });
  }

  console.log(item);
};
</script>

<script lang="ts">
export default {
  name: "Dashboard", // If you want the include property of keep-alive to take effect, you must name the component
};
</script>

<style lang="less">
.layout-demo {
  height: 86vh;
}
</style>
