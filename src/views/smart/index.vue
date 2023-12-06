<template>
  <div class="container">
    <a-layout class="layout-demo">
      <a-layout-sider collapsible breakpoint="xl">
        <a-menu
          :style="{ width: '200px', borderRadius: '4px' }"
          :default-open-keys="['0']"
          :default-selected-keys="['0_0']"
          @menu-item-click="handleClick"
        >
          <!-- <a-sub-menu v-for="List in ListValue" :key="List.id">
            <template #title>{{ List.title }}</template>
            <a-menu-item v-for="item in List.ListValue2" :key="item.id" @click="handleClick(item)">
              {{ item.icon }}
              {{ item.first}}
            </a-menu-item>
          </a-sub-menu> -->
          <a-menu-item key="0_0"> 发电总览 </a-menu-item>
          <a-menu-item key="1_0"> 单站概览 </a-menu-item>
          <a-menu-item key="2_0"> 能量流图 </a-menu-item>
          <a-menu-item key="3_0"> 逆变器评估 </a-menu-item>
          <a-menu-item key="4_0"> 支架监测 </a-menu-item>
          <a-sub-menu key="5_0" title="发电分析">
            <a-menu-item key="5_1"> 发电量分析 </a-menu-item>
            <a-menu-item key="5_2"> 发电效率 </a-menu-item>
            <a-menu-item key="5_3"> 损耗分析 </a-menu-item>
            <a-menu-item key="5_4"> 等效利用小时 </a-menu-item>
            <a-menu-item key="5_5"> 离散率分析 </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="6_0" title="发电分析">
            <a-menu-item key="6_1"> 站点发电量 </a-menu-item>
            <a-menu-item key="6_2"> 逆变器发电量 </a-menu-item>
          </a-sub-menu>
        </a-menu>
        <template #trigger="{ collapsed }">
          <IconCaretRight v-if="collapsed"></IconCaretRight>
          <IconCaretLeft v-else></IconCaretLeft>
        </template>
      </a-layout-sider>

      <a-layout-content>
        <div v-if="items === '0'">
          <!-- 站点看板 -->
          <electricityOverview />
        </div>
        <div v-else-if="items === '1'">
          <stationKanban />
        </div>
        <div v-else-if="items === '2'">
          <Cooperation />
        </div>
        <div v-else-if="items === '3'">
          <Setting />
        </div>
        <div v-else-if="items === '4'">
          <Overview />
        </div>
        <div v-else-if="items === '5'">
          <Monitor />
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
  import { ref, Ref } from 'vue';
  // import { useRouter } from "vue-router";

  // const router = useRouter();
  import electricityOverview from './components/electricity-overview.vue';
  import stationKanban from './components/station-kanban.vue';
  // import Overview from './components/overview.vue';
  // import Monitor from './components/monitor.vue';
  //
  // import Cooperation from './cooperation/index.vue';
  // import Setting from './setting/index.vue';

  const items: Ref<string> = ref('0');

  const handleClick = (key: any) => {
    if (key === '0_0') {
      items.value = '0';
    } else if (key === '1_0') {
      items.value = '1';
    } else if (key === '2_0') {
      items.value = '2';
    } else if (key === '3_0') {
      items.value = '3';
    } else if (key === '4_1') {
      items.value = '4';
    } else if (key === '4_2') {
      items.value = '5';
    }
  };
</script>

<style lang="less">
  .arco-layout-sider-children {
    overflow-y: auto;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #556170;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #78818c;
  }

  .layout-demo {
    height: 88vh;
  }

  .arco-radio-group .arco-radio {
    margin: 0;
  }

  .arco-radio {
    padding: 0;
  }

  .arco-tag {
    border-radius: unset;
  }
  .arco-tabs-type-card > .arco-tabs-content {
    border: none;
  }
</style>
