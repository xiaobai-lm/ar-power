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
          <a-menu-item key="0_0"> 能耗总览 </a-menu-item>
          <a-menu-item key="1_0"> 分类分项 </a-menu-item>
          <a-menu-item key="2_0"> 能流图 </a-menu-item>
          <a-menu-item key="3_0"> 用能查询 </a-menu-item>
          <a-menu-item key="4_0"> 用能报表 </a-menu-item>
          <a-sub-menu key="5_0" title="能耗分析">
            <a-menu-item key="5_1"> 同期对比 </a-menu-item>
            <a-menu-item key="5_2"> 排名对比 </a-menu-item>
            <a-menu-item key="5_3"> 偏差分析 </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="6_0"> 抄表 </a-menu-item>
          <a-menu-item key="7_0"> 分时用电 </a-menu-item>
          <a-menu-item key="8_0"> 电费分析 </a-menu-item>
          <a-sub-menu key="9_0" title="节能节费">
            <a-menu-item key="9_1"> 诊断概览 </a-menu-item>
            <a-menu-item key="9_2"> 历史诊断 </a-menu-item>
            <a-menu-item key="9_3"> 节能配置 </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="10_0" title="单耗分析">
            <a-menu-item key="10_1"> 产值单耗 </a-menu-item>
            <a-menu-item key="10_2"> 产品单耗 </a-menu-item>
            <a-menu-item key="10_3"> 单号对标 </a-menu-item>
            <a-menu-item key="10_4"> 产品配置 </a-menu-item>
            <a-menu-item key="10_5"> 工序配置 </a-menu-item>
            <a-menu-item key="10_6"> 产量数据 </a-menu-item>
            <a-menu-item key="10_7"> 对标配置 </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="11_0"> 人工填报 </a-menu-item>
          <a-menu-item key="12_0"> 能耗配置 </a-menu-item>
        </a-menu>
        <template #trigger="{ collapsed }">
          <IconCaretRight v-if="collapsed"></IconCaretRight>
          <IconCaretLeft v-else></IconCaretLeft>
        </template>
      </a-layout-sider>

      <a-layout-content>
        <div v-if="items === '0'">
          <!-- 站点看板 -->
          <EnergyConsumption />
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
  import { ref, Ref } from 'vue';
  // import { useRouter } from "vue-router";

  // const router = useRouter();
  import EnergyConsumption from './components/EnergyConsumption.vue';

  const items: Ref<string> = ref('0');

  const handleClick = (key: any) => {
    if (key === '0_0') {
      items.value = '0';
    } else if (key === '1_0') {
      // router.push({ path: "seconde" });
      items.value = '1';
    } else if (key === '2_0') {
      items.value = '2';
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
</style>
