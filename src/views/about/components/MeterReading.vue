<template>
  <div class="container">
    <a-row :gutter="10">
      <a-col :span="4">
        <a-card class="container-left">
          <leftSide />
        </a-card>
      </a-col>
      <a-col :span="20" class="container-right">
        <a-card>
          <a-range-picker
            :default-value="rangeValue"
            :shortcuts="shortcuts"
            :time-picker-props="{ defaultValue: ['00:00:00', '09:09:06'] }"
            format="YYYY-MM-DD HH:mm"
            show-time
            style="width: 360px; margin: 0 24px 24px 0"
          />
          <a-button style="margin: 0 10px" type="outline">
            <template #icon>
              <icon-search />
            </template>
            <!-- Use the default slot to avoid extra spaces -->
            <template #default>查询</template>
          </a-button>
          <a-button style="margin: 0 10px 0 0" type="outline">
            <template #icon>
              <icon-upload />
            </template>
            <!-- Use the default slot to avoid extra spaces -->
            <template #default>导出</template>
          </a-button>
          <a-table
            v-show="isShow"
            :bordered="{ cell: true }"
            :columns="columns"
            :data="data"
            style="margin-top: 20px"
          ></a-table>
          <div v-show="isShowTwo" id="myChart"></div>
        </a-card>
      </a-col>
    </a-row>
    <a-button @click="handleClick">按钮</a-button>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import * as dayjs from 'dayjs';

  import leftSide from '../../../components/leftSide/chackIndex.vue';

  const checkValue = ref('1');
  const labelValue = ref('1');
  const isShow = ref(true);
  const isShowTwo = ref(false);

  const rangeValue = ref([Date.now(), Date.now()]);
  const dateValue = dayjs().format('YYYY-MM-DD');

  const shortcuts = ref([
    {
      label: '今天',
      value: () => [dayjs(), dayjs()],
    },
    {
      label: '最近24小时',
      value: () => [dayjs(), dayjs().add(1, 'month')],
    },
    {
      label: '昨日',
      value: () => [dayjs(), dayjs().add(1, 'year')],
    },
    {
      label: '最近7日',
      value: () => [dayjs(), dayjs().add(1, 'year')],
    },
    {
      label: '最近30天',
      value: () => [dayjs(), dayjs().add(1, 'year')],
    },
    {
      label: '本月',
      value: () => [dayjs(), dayjs().add(1, 'year')],
    },
    {
      label: '上月',
      value: () => [dayjs(), dayjs().add(1, 'year')],
    },
    {
      label: '最近12月',
      value: () => [dayjs(), dayjs().add(1, 'year')],
    },
    {
      label: '本年',
      value: () => [dayjs(), dayjs().add(1, 'year')],
    },
    {
      label: '上一年',
      value: () => [dayjs(), dayjs().add(1, 'year')],
    },
  ]);

  const columns = ref([
    {
      title: '支路名称',
      dataIndex: 'name',
    },
    {
      title: dateValue,
      dataIndex: 'startDate',
    },
    {
      title: dateValue,
      dataIndex: 'endDate',
    },
    {
      title: '汇总',
      dataIndex: 'differentialValue',
      width: '80',
    },
    {
      title: '单位',
      dataIndex: 'unit',
      width: '80',
    },
  ]);

  const data = reactive([
    {
      key: '1',
      name: '汇总设备',
      startDate: '321',
      endDate: '',
      differentialValue: '64',
      unit: '423',
    },
  ]);
</script>

<style lang="less" scoped>
  .container {
    &-left {
    }

    &-right {
      padding: 0 10px;
    }
  }

  .arco-tag {
    margin: 0 10px 10px 0;
  }
</style>
