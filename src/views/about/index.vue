<template>
  <div class="container">
    <a-layout class="layout-demo">
      <a-layout-sider :collapsed="collapse" breakpoint="xl" collapsible>
        <a-menu
          :collapsed="collapsed"
          :default-open-keys="['0']"
          :default-selected-keys="['0_0']"
          :style="{ width: '200px', borderRadius: '4px' }"
          @menu-item-click="handleClick"
        >
          <!-- <a-sub-menu v-for="List in ListValue" :key="List.id">
            <template #title>{{ List.title }}</template>
            <a-menu-item v-for="item in List.ListValue2" :key="item.id" @click="handleClick(item)">
              {{ item.icon }}
              {{ item.first}}
            </a-menu-item>
          </a-sub-menu> -->
          <a-menu-item key="0_0">
            <icon-settings />
            能耗总览
          </a-menu-item>
          <a-menu-item key="1_0">
            <icon-settings />
            分类分项
          </a-menu-item>
          <a-menu-item key="2_0">
            <icon-settings />
            能流图
          </a-menu-item>
          <a-menu-item key="3_0">
            <icon-settings />
            用能查询
          </a-menu-item>
          <a-menu-item key="4_0">
            <icon-settings />
            用能报表
          </a-menu-item>
          <a-sub-menu key="5_0">
            <template #title>能耗分析</template>
            <a-menu-item key="5_1">
              <icon-settings />
              同期对比
            </a-menu-item>
            <a-menu-item key="5_2">
              <icon-settings />
              排名分析
            </a-menu-item>
            <a-menu-item key="5_3">
              <icon-settings />
              偏差分析
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="6_0">
            <icon-settings />
            抄表
          </a-menu-item>
          <a-menu-item key="7_0">
            <icon-settings />
            分时用电
          </a-menu-item>
          <a-menu-item key="8_0">
            <icon-settings />
            电费分析
          </a-menu-item>
          <a-sub-menu key="9_0">
            <template #icon>
              <icon-bug></icon-bug>
            </template>
            <template #title>节能节费</template>
            <a-menu-item key="9_1">
              <icon-settings />
              诊断概览
            </a-menu-item>
            <a-menu-item key="9_2">
              <icon-settings />
              历史诊断
            </a-menu-item>
            <a-menu-item key="9_3">
              <icon-settings />
              节能配置
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="10_0">
            <template #icon>
              <icon-bug></icon-bug>
            </template>
            <template #title>单耗分析</template>
            <a-menu-item key="10_1">
              <icon-settings />
              产值单耗
            </a-menu-item>
            <a-menu-item key="10_2">
              <icon-settings />
              产品单耗
            </a-menu-item>
            <a-menu-item key="10_3">
              <icon-settings />
              单号对标
            </a-menu-item>
            <a-menu-item key="10_4">
              <icon-settings />
              产品配置
            </a-menu-item>
            <a-menu-item key="10_5">
              <icon-settings />
              工序配置
            </a-menu-item>
            <a-menu-item key="10_6">
              <icon-settings />
              产量数据
            </a-menu-item>
            <a-menu-item key="10_7">
              <icon-settings />
              对标配置
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="11_0">
            <icon-settings />
            人工填报
          </a-menu-item>
          <a-menu-item key="12_0">
            <icon-settings />
            能耗配置
          </a-menu-item>
        </a-menu>
        <template #trigger="{ collapsed }">
          <IconCaretRight v-if="collapsed"></IconCaretRight>
          <IconCaretLeft v-else></IconCaretLeft>
        </template>
      </a-layout-sider>

      <a-layout-content>
        <div v-if="items === '0'">
          <!-- 能耗总览 -->
          <EnergyConsumption />
        </div>
        <div v-if="items === '1'">
          <!-- 分类分项 -->
          <Classification />
        </div>
        <div v-if="items === '2'">
          <!-- 能流图 -->
          <EnergyFlow />
        </div>
        <div v-if="items === '3'">
          <!-- 用能查询 -->
          <EnergyUseInquiry />
        </div>
        <div v-if="items === '4'">
          <!-- 用能报表 -->
          <EnergyUseInquiryReportForms />
        </div>
        <div v-if="items === '5'">
          <!-- 同期对比 -->
          <SameContrast />
        </div>
        <div v-if="items === '6'">
          <!-- 排名分析 -->
          <RankingAnalysis />
        </div>
        <div v-if="items === '7'">
          <!-- 偏差分析 -->
          <DeviationAnalysis />
        </div>
        <div v-if="items === '8'">
          <!-- 抄表 -->
          <MeterReading />
        </div>
        <div v-if="items === '9'">
          <!-- 用电分析 -->
          <TimeShareElectricityConsumption />
        </div>
        <div v-if="items === '10'">
          <!-- 电费分析 -->
          <ElectricityChargeAnalysis />
        </div>
        <div v-if="items === '11'">
          <!-- 诊断概览 -->
          <DiagnosticOverview />
        </div>
        <div v-if="items === '12'">
          <!-- 历史诊断 -->
          <DiagnosticOverview />
        </div>
        <div v-if="items === '13'">
          <!-- 节能配置 -->
          <DiagnosticOverview />
        </div>
        <div v-if="items === '14'">
          <!-- 产值单耗 -->
          <OutputConsumption />
        </div>
        <div v-if="items === '15'">
          <!-- 产品单耗 -->
          <ProductUnitConsumption />
        </div>
        <div v-if="items === '16'">
          <!-- 单耗对标 -->
          <PieceYardage />
        </div>
        <div v-if="items === '17'">
          <!-- 产品配置 -->
          <ProductConfiguration />
        </div>
        <div v-if="items === '18'">
          <!-- 工序配置 -->
          <ProcessConfiguration />
        </div>
        <div v-if="items === '19'">
          <!-- 产量数据 -->
          <OutputData />
        </div>
        <div v-if="items === '20'">
          <!-- 对标配置 -->
          <Benchmarking />
        </div>
        <div v-if="items === '21'">
          <!-- 人工填报 -->
          <ManualReporting />
        </div>
        <div v-if="items === '22'">
          <!-- 人工填报 -->
          <EnergyConsumptions />
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
  import { ref, Ref } from 'vue';
  import EnergyConsumption from './components/EnergyConsumption.vue';
  import Classification from './components/Classification.vue';
  import EnergyFlow from './components/EnergyFlow.vue';
  import EnergyUseInquiry from './components/EnergyUseInquiry.vue';
  import EnergyUseInquiryReportForms from './components/EnergyUseInquiryReportForms.vue';
  import SameContrast from './components/SameContrast.vue';
  import RankingAnalysis from './components/RankingAnalysis.vue';
  import DeviationAnalysis from './components/DeviationAnalysis.vue';
  import MeterReading from './components/MeterReading.vue';
  import TimeShareElectricityConsumption from './components/TimeShareElectricityConsumption.vue';
  import ElectricityChargeAnalysis from './components/ElectricityChargeAnalysis.vue';
  import DiagnosticOverview from './components/DiagnosticOverview.vue';
  import OutputConsumption from './components/OutputConsumption.vue';
  import ProductUnitConsumption from './components/ProductUnitConsumption.vue';
  import PieceYardage from './components/PieceYardage.vue';
  import ProductConfiguration from './components/ProductConfiguration.vue';
  import ProcessConfiguration from './components/ProcessConfiguration.vue';
  import OutputData from './components/OutputData.vue';
  import Benchmarking from './components/Benchmarking.vue';
  import ManualReporting from './components/ManualReporting.vue';
  import EnergyConsumptions from './components/EnergyConsumptions.vue';

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
    } else if (key === '4_0') {
      items.value = '4';
    } else if (key === '5_1') {
      items.value = '5';
    } else if (key === '5_2') {
      items.value = '6';
    } else if (key === '5_3') {
      items.value = '7';
    } else if (key === '6_0') {
      items.value = '8';
    } else if (key === '7_0') {
      items.value = '9';
    } else if (key === '8_0') {
      items.value = '10';
    } else if (key === '9_1') {
      items.value = '11';
    } else if (key === '9_2') {
      items.value = '12';
    } else if (key === '9_3') {
      items.value = '13';
    } else if (key === '10_1') {
      items.value = '14';
    } else if (key === '10_2') {
      items.value = '15';
    } else if (key === '10_3') {
      items.value = '16';
    } else if (key === '10_4') {
      items.value = '17';
    } else if (key === '10_5') {
      items.value = '18';
    } else if (key === '10_6') {
      items.value = '19';
    } else if (key === '10_7') {
      items.value = '20';
    } else if (key === '11_0') {
      items.value = '21';
    } else if (key === '12_0') {
      items.value = '22';
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
