<template>
  <div class="container">
    <div class="container-header">
      <a-row :gutter="20">
        <a-col :span="4">
          <a-select
            :style="{ width: '100%' }"
            default-value="山东"
            placeholder="Please select ..."
          >
            <a-option>上海 </a-option>
            <a-option>北京 </a-option>
          </a-select>
        </a-col>
        <a-col :span="4">
          <a-select
            :style="{ width: '100%' }"
            default-value="蓬莱市"
            placeholder="Please select ..."
          >
            <a-option>虹口区</a-option>
            <a-collapse :default-active-key="[1]" accordion>
              <!-- <a-collapse-item header="测试" key="1">
                <div>Beijing Toutiao Technology Co., Ltd.</div>
                <div>Beijing Toutiao</div>
              </a-collapse-item> -->
            </a-collapse>
          </a-select>
        </a-col>
        <a-col :span="6">
          <a-range-picker v-model="rangeValue" style="width: 100%" />
        </a-col>
        <a-col :span="4">
          <a-select default-value="所有类型" placeholder="Please select ...">
            <a-option> 所有类型</a-option>
            <a-option> 电流越下线 </a-option>
            <a-option> 设备离线</a-option>
            <a-option> 越上线</a-option>
            <a-option> 电流超限预警</a-option>
            <a-option> 用能告警</a-option>
            <a-option> 越上上线</a-option>
            <a-option> 通道通讯中断</a-option>
            <a-option> 电流超限</a-option>
            <a-option> 越下下线</a-option>
            <a-option> 越下线</a-option>
            <a-option> 0_1状态变位</a-option>
            <a-option> 电气火灾</a-option>
            <a-option> 跳闸</a-option>
          </a-select>
        </a-col>
      </a-row>
    </div>
    <div class="container-body">
      <a-card>
        <a-table
          :columns="columns"
          :data="dataList"
          :bordered="{ wrapper: true, cell: true }"
        />
      </a-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const rangeValue = [Date.now(), Date.now()];

  const columns = [
    {
      title: '设备',
      dataIndex: 'a',
    },
    {
      title: '客户站点',
      dataIndex: 'b',
    },
    {
      title: '伤害类型',
      dataIndex: 'c',
    },
    {
      title: '室屋漏气',
      dataIndex: 'd',
    },
    {
      title: '事故影响',
      dataIndex: 'e',
      sortable: {
        sortDirections: ['ascend', 'descend'],
      },
    },
    {
      title: '事故',
      dataIndex: 'f',
      sortable: {
        sortDirections: ['ascend', 'descend'],
      },
    },
    // {
    //   title: "事故详情",
    //   dataIndex: "g",
    // },
  ];
  const dataList = ref([
    {
      a: '磁共振系统 ',
      b: '蓬莱市人民医院',
      c: '其他',
      d: '2022.12.17晚上工作人员发现磁共振室屋漏气。立即上报主任，报告医务科发通知磁共振机器维修，联系工程师进行维修，未造成任何不良影响',
      e: '伤害表现',
      f: '磁共振室屋漏气',
      // g: "温度过高",
    },
    {
      a: '磁共振系统 ',
      b: '蓬莱市人民医院',
      c: '其他',
      d: '2022.12.17晚上工作人员发现磁共振室屋漏气。立即上报主任，报告医务科发通知磁共振机器维修，联系工程师进行维修，未造成任何不良影响',
      e: '伤害表现',
      f: '磁共振室屋漏气',
      // g: "温度过高",
    },
    {
      a: '磁共振系统 ',
      b: '蓬莱市人民医院',
      c: '其他',
      d: '2022.12.17晚上工作人员发现磁共振室屋漏气。立即上报主任，报告医务科发通知磁共振机器维修，联系工程师进行维修，未造成任何不良影响',
      e: '伤害表现',
      f: '磁共振室屋漏气',
      // g: "温度过高",
    },
    {
      a: '磁共振系统 ',
      b: '蓬莱市人民医院',
      c: '其他',
      d: '2022.12.17晚上工作人员发现磁共振室屋漏气。立即上报主任，报告医务科发通知磁共振机器维修，联系工程师进行维修，未造成任何不良影响',
      e: '伤害表现',
      f: '磁共振室屋漏气',
      // g: "温度过高",
    },
    {
      a: '磁共振系统 ',
      b: '蓬莱市人民医院',
      c: '其他',
      d: '2022.12.17晚上工作人员发现磁共振室屋漏气。立即上报主任，报告医务科发通知磁共振机器维修，联系工程师进行维修，未造成任何不良影响',
      e: '伤害表现',
      f: '磁共振室屋漏气',
      // g: "温度过高",
    },
    {
      a: '磁共振系统 ',
      b: '蓬莱市人民医院',
      c: '其他',
      d: '2022.12.17晚上工作人员发现磁共振室屋漏气。立即上报主任，报告医务科发通知磁共振机器维修，联系工程师进行维修，未造成任何不良影响',
      e: '伤害表现',
      f: '磁共振室屋漏气',
      // g: "温度过高",
    },
  ]);
</script>

<style lang="less" scoped>
  .container {
    padding: 10px;

    &-body {
      padding: 20px 0 0 0;
    }
  }

  :deep(.arco-table .arco-table-element) {
    margin: 0;
  }
</style>
