<template>
  <div class="container">
    <a-tabs v-model="tabsValue">
      <a-tab-pane key="1" title="产值"></a-tab-pane>
      <a-tab-pane key="2" title="增加值"></a-tab-pane>
      <a-tab-pane key="3" title="人数"></a-tab-pane>
      <a-tab-pane key="4" title="面具"></a-tab-pane>
      <a-tab-pane key="5" title="运营时段"></a-tab-pane>
    </a-tabs>
    <a-button style="margin-bottom: 10px" type="primary" @click="addClick">
      <template #icon>
        <icon-search></icon-search>
      </template>
      增加
    </a-button>
    <a-modal
      v-model:visible="visible"
      width="700px"
      @cancel="handleCancel"
      @ok="handleOk"
    >
      <template #title> Title</template>
      <div>
        <a-form :model="form" :style="{ width: '600px' }">
          <a-form-item
            field="date"
            label="时间"
            required
            validate-trigger="input"
          >
            <a-date-picker v-model="form.date" style="width: 150px" />
          </a-form-item>
          <a-form-item
            field="unit"
            label="单位"
            required
            validate-trigger="input"
          >
            <a-input
              v-model="form.unit"
              placeholder="单位"
              style="width: 600px"
            />
          </a-form-item>
          <a-form-item field="output" label="产值(年)" validate-trigger="input">
            <a-input
              v-model="form.output"
              placeholder="产值(年)"
              style="width: 600px"
            />
          </a-form-item>
          <div style="margin: 10px 0; padding: 0 10%">
            <a-space>时间:</a-space>
            <a-space>2023 每月产量</a-space>
          </div>
          <a-row :gutter="20" style="padding: 0 10%">
            <a-col :span="6">
              <a-space> {{ '1月' }}</a-space>
              <a-input-number v-model="JanValue" />
            </a-col>
            <a-col :span="6">
              <a-space> {{ '2月' }}</a-space>
              <a-input-number v-model="FebValue" />
            </a-col>
            <a-col :span="6">
              <a-space> {{ '3月' }}</a-space>
              <a-input-number v-model="MarValue" />
            </a-col>
            <a-col :span="6">
              <a-space> {{ '4月' }}</a-space>
              <a-input-number v-model="AprValue" />
            </a-col>
          </a-row>
        </a-form>
        <a-checkbox v-model="checkBox" @change="handleChange"
          >连续添加模式
        </a-checkbox>
      </div>
    </a-modal>
    <a-table
      :bordered="{ cell: true, wrapper: true }"
      :columns="columns"
      :data="data"
    >
      <template #option="{ record, rowIndex }">
        <a-button type="text" @click="editClcik(record, rowIndex)"
          >编辑
        </a-button>
        <a-button type="text" @click="delClick(record, rowIndex)"
          >删除
        </a-button>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const tabsValue = ref('1');

  const JanValue = ref();
  const FebValue = ref();
  const MarValue = ref();
  const AprValue = ref();

  const checkBox = ref(false);

  const visible = ref(false);

  const form = {
    date: '',
    unit: '',
    output: '',
  };

  const addClick = () => {
    visible.value = true;
  };

  const columns = [
    {
      title: '产品',
      dataIndex: 'date',
    },
    {
      title: '单位',
      dataIndex: 'unit',
    },
    {
      title: '产值(年)',
      dataIndex: 'output',
    },
    {
      title: '产量(月)',
      children: [
        {
          title: '1月',
          dataIndex: 'Jan',
        },
        {
          title: '2月',
          dataIndex: 'Feb',
        },
        {
          title: '3月',
          dataIndex: 'Mar',
        },
        {
          title: '4月',
          dataIndex: 'Apr',
        },
        {
          title: '5月',
          dataIndex: 'May',
        },
        {
          title: '6月',
          dataIndex: 'Jun',
        },
        {
          title: '7月',
          dataIndex: 'Jul',
        },
        {
          title: '8月',
          dataIndex: 'Aug',
        },
        {
          title: '9月',
          dataIndex: 'Sep',
        },
        {
          title: '10月',
          dataIndex: 'Oct',
        },
        {
          title: '11月',
          dataIndex: 'Nov',
        },
        {
          title: '12月',
          dataIndex: 'Dec',
        },
      ],
    },
    {
      title: '操作',
      slotName: 'option',
    },
  ];

  const data = ref([]);
  const handleChange = () => {
    console.log(checkBox.value);
  };
  const handleOk = () => {
    const options = {
      date: form.date,
      unit: form.unit,
      output: form.output,
    };
    form.date = '';
    form.unit = '';
    form.output = '';
    if (checkBox.value === true) {
      data.value.push(options);
    }
  };

  const handleCancel = () => {
    visible.value = false;
  };
  const editClcik = (record: any, rowIndex: any) => {
    console.log();
  };
  const delClick = (record: any, rowIndex: any) => {
    data.value.splice(rowIndex, 1);
  };
</script>

<style scoped>
  .container {
    padding: 10px;
  }
</style>
