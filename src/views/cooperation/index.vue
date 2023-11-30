<template>
  <div class="container">
    <a-layout class="layout-demo">
      <a-layout-sider collapsible breakpoint="xl" :collapsed="collapse">
        <a-menu
          :style="{ width: '200px', borderRadius: '4px' }"
          :collapsed="collapsed"
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
          <a-menu-item key="0_0"> 需量分析 </a-menu-item>
          <a-menu-item key="1_0"> 负荷预测 </a-menu-item>
          <a-menu-item key="2_0"> 计划实绩 </a-menu-item>
          <a-menu-item key="3_0"> 计划编制 </a-menu-item>
          <a-sub-menu key="4_0" title="需求响应">
            <a-menu-item key="4_1"> 响应统计 </a-menu-item>
            <a-menu-item key="4_2"> 事件监控 </a-menu-item>
          </a-sub-menu>
        </a-menu>
        <template #trigger="{ collapsed }">
          <IconCaretRight v-if="collapsed"></IconCaretRight>
          <IconCaretLeft v-else></IconCaretLeft>
        </template>
      </a-layout-sider>

      <a-layout-content>
        <div v-if="items === '0'">
          <!-- 需量分析 -->
          <demandAnalysis />
        </div>
        <div v-else-if="items === '1'">
          <!--        负荷预测  -->
          <loadForecast />
        </div>
        <div v-else-if="items === '2'">
          <!--        计划实绩  -->
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
  import demandAnalysis from './components/demand-analysis.vue';
  import loadForecast from './components/load-forecast.vue';
  import Overview from './components/overview.vue';
  import Monitor from './components/monitor.vue';

  import Cooperation from './cooperation/index.vue';
  import Setting from './setting/index.vue';

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
