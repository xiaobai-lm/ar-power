<template>
  <div class="container">
    <a-tabs>
      <a-tab-pane key="1" title="产品">
        <a-row :gutter="20">
          <a-col :span="4">
            <div>
              <a-checkbox>测试</a-checkbox>
            </div>
            <a-input placeholder="搜索产品">
              <template #icon>
                <icon-search></icon-search>
              </template>
            </a-input>
            <a-checkbox-group
              v-model="checkBox"
              direction="vertical"
              @change="handleChange"
            >
              <a-checkbox value="1">选择1</a-checkbox>
              <a-checkbox value="2">选择2</a-checkbox>
              <a-checkbox value="3">选择3</a-checkbox>
            </a-checkbox-group>
          </a-col>
          <a-col :span="20">
            <a-space>周期：</a-space>
            <a-select v-model="selectValue" style="width: 200px">
              <a-option value="1">12</a-option>
              <a-option value="2">23</a-option>
            </a-select>
            <a-space>时间：</a-space>
            <a-month-picker style="width: 200px"></a-month-picker>
            <a-button style="margin-left: 20px" type="primary">
              <template #icon>
                <icon-search></icon-search>
              </template>
              查询
            </a-button>
            <a-table
              :bordered="{ wrapper: true, cell: true }"
              :columns="columns"
              :data="data"
              style="margin-top: 20px"
            >
              <template #option="{ record }">
                <a-button type="text" @click="handleClick(record)"
                  >按钮
                </a-button>
                <a-modal
                  v-model:visible="visible"
                  width="800px"
                  @cancel="handleCancel"
                  @ok="handleOk(record)"
                >
                  <template #title> 编辑产品产量</template>
                  <div>
                    <div>
                      <a-space>产品：</a-space>
                      <a-input
                        v-model="product"
                        :style="{ width: '320px' }"
                        class="input-demo"
                      />
                    </div>
                    <div style="margin-top: 20px">
                      <a-space>单位：</a-space>
                      <a-input
                        v-model="unit"
                        :style="{ width: '320px' }"
                        class="input-demo"
                      />
                    </div>
                    <div style="margin: 10px 0">
                      <a-space>时间:</a-space>
                      <a-space>2023 每月产量</a-space>
                    </div>

                    <a-row :gutter="20">
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
                  </div>
                </a-modal>
              </template>
            </a-table>
          </a-col>
        </a-row>
      </a-tab-pane>
      <a-tab-pane key="2" title="工序">
        <a-row :gutter="20">
          <a-col :span="4">
            <div>
              <a-checkbox>测试</a-checkbox>
            </div>
            <a-input placeholder="搜索产品">
              <template #icon>
                <icon-search></icon-search>
              </template>
            </a-input>
            <a-checkbox-group
              v-model="checkBox"
              direction="vertical"
              @change="handleChange"
            >
              <a-checkbox value="1">选择1</a-checkbox>
              <a-checkbox value="2">选择2</a-checkbox>
              <a-checkbox value="3">选择3</a-checkbox>
            </a-checkbox-group>
          </a-col>
          <a-col :span="20">
            <a-space>周期：</a-space>
            <a-select v-model="selectValue" style="width: 200px">
              <a-option value="1">12</a-option>
              <a-option value="2">23</a-option>
            </a-select>
            <a-space>时间：</a-space>
            <a-month-picker style="width: 200px"></a-month-picker>
            <a-button style="margin-left: 20px" type="primary">
              <template #icon>
                <icon-search></icon-search>
              </template>
              查询
            </a-button>
            <a-table
              :bordered="{ wrapper: true, cell: true }"
              :columns="columns"
              :data="data"
              style="margin-top: 20px"
            >
              <template #option="{ record }">
                <a-button type="text" @click="handleClick(record)"
                  >按钮
                </a-button>
                <a-modal
                  v-model:visible="visible"
                  width="800px"
                  @cancel="handleCancel"
                  @ok="handleOk(record)"
                >
                  <template #title> 编辑产品产量</template>
                  <div>
                    <div>
                      <a-space>产品：</a-space>
                      <a-input
                        v-model="product"
                        :style="{ width: '320px' }"
                        class="input-demo"
                      />
                    </div>
                    <div style="margin-top: 20px">
                      <a-space>单位：</a-space>
                      <a-input
                        v-model="unit"
                        :style="{ width: '320px' }"
                        class="input-demo"
                      />
                    </div>
                    <div style="margin: 10px 0">
                      <a-space>时间:</a-space>
                      <a-space>2023 每月产量</a-space>
                    </div>

                    <a-row :gutter="20">
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
                  </div>
                </a-modal>
              </template>
            </a-table>
          </a-col>
        </a-row>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  // const plainOptions = ['Plain 1', 'Plain 2', 'Plain 3', 'Plain 4'];想·
  const selectValue = ref('1');
  const checkBox = ref('2');
  const visible = ref(false);
  const product = ref('');
  const unit = ref('');
  const JanValue = ref();
  const FebValue = ref();
  const MarValue = ref();
  const AprValue = ref();

  const columns = [
    {
      title: '产品',
      dataIndex: 'product',
    },
    {
      title: '单位',
      dataIndex: 'unit',
    },
    {
      title: '产量',
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

  const handleClick = (record: any) => {
    visible.value = true;
    console.log(record);
    product.value = record.product;
    unit.value = record.unit;
  };

  const handleOk = (record: any) => {
    const mouthValue = {
      product: product.value,
      unit: unit.value,
      Jan: JanValue.value,
      Feb: FebValue.value,
      Mar: MarValue.value,
      Apr: AprValue.value,
    };
    console.log(record);

    visible.value = false;
  };

  const handleCancel = () => {
    visible.value = false;
  };

  const handleChange = () => {
    console.log(checkBox.value);
    const a = {
      product: checkBox.value,
      unit: checkBox.value,
    };
    data.value.push(a);
  };
</script>

<style scoped>
  .container {
    padding: 10px;
    color: var(--color-text-2);
  }

  .input-demo {
    width: 50px;
  }
</style>
