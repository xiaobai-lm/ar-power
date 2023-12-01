<template>
  <div class="container">
    <div class="container-header">
      <a-row :gutter="10">
        <a-col :span="2">
          <a-button>按钮</a-button>
        </a-col>
        <a-col :span="3">
          <a-select
            :style="{ width: '100%' }"
            default-value="123"
            placeholder="Please select ..."
          >
            <a-option>123</a-option>
            <a-option>456</a-option>
          </a-select>
        </a-col>
        <a-col :span="3">
          <a-select
            :style="{ width: '100%' }"
            default-value="1234"
            placeholder="Please select ..."
          >
            <a-option>1234</a-option>
            <a-collapse :default-active-key="[1]" accordion>
              <a-collapse-item key="1" header="测试">
                <div>Beijing Toutiao Technology Co., Ltd.</div>
              </a-collapse-item>
            </a-collapse>
          </a-select>
        </a-col>
        <a-col :span="6">
          <a-range-picker v-model="rangeValue" style="width: 100%" />
        </a-col>
        <a-col :span="4">
          <a-select default-value="123" placeholder="Please select ...">
            <a-option>123</a-option>
            <a-option>456</a-option>
          </a-select>
        </a-col>
        <a-col :span="4">
          <a-checkbox
            :default-checked="checkbox1"
            value="1"
            @change="handleChangeCheckbox"
            >未确认
          </a-checkbox>
          <a-checkbox value="2" @change="handleChangeCheckbox2"
            >聚合
          </a-checkbox>
        </a-col>
        <a-col :span="2">
          <a-button>
            <template></template>
            导出
          </a-button>
        </a-col>
      </a-row>
    </div>
    <div class="container-body">
      <a-table
        :bordered="{ wrapper: true, cell: true }"
        :data="data"
        :pagination="pagination"
        :row-selection="rowSelection"
        style="margin-top: 30px"
        @change="handleChangePage"
      >
        <template #columns>
          <a-table-column
            data-index="occurrenceTime"
            title="发生时间"
          ></a-table-column>
          <a-table-column
            :sortable="sortable"
            data-index="acknowledgingTime"
            title="确认时间"
          >
          </a-table-column>
          <a-table-column
            :sortable="sortable"
            data-index="reportAnEmergency"
            title="告警"
          ></a-table-column>
          <a-table-column
            :sortable="sortable"
            data-index="station"
            title="站点"
          >
          </a-table-column>
          <a-table-column
            :sortable="sortable"
            data-index="equipment"
            title="设备"
          >
          </a-table-column>
          <a-table-column
            :sortable="sortable"
            data-index="AlarmType"
            title="告警类型"
          >
          </a-table-column>
          <a-table-column :sortable="sortable" title="告警级别">
            <template #cell="{ record }">
              <div
                style="width: 100px; background: #fe0400; text-align: center"
              >
                {{ record.AlarmLevel }}
              </div>
            </template>
          </a-table-column>
          <a-table-column
            :sortable="sortable"
            data-index="details"
            title="详情"
          >
            <template #cell="{ record }">
              <div
                style="color: #6c7fff; cursor: pointer"
                @click="viewClick(record)"
              >
                查看
              </div>
              <a-modal
                v-model:visible="visible"
                title-align="start"
                width="800px"
                @cancel="handleCancel"
                @ok="handleOk"
              >
                <template #title>
                  {{ record.occurrenceTime
                  }}{{ record.reportAnEmergency }} 告警响起
                </template>
                <div>
                  <a-tabs default-active-key="1">
                    <a-tab-pane key="1" title="告警信息">
                      <div>
                        <span
                          style="
                            width: 120px;
                            display: inline-block;
                            text-align: center;
                            margin: 10px 26px;
                          "
                          >发生时间</span
                        >
                        <span>{{ record.occurrenceTime }}</span>
                      </div>
                      <div>
                        <span
                          style="
                            width: 120px;
                            display: inline-block;
                            text-align: center;
                            margin: 10px 26px;
                          "
                          >确认时间</span
                        >
                        <span>{{ record.acknowledgingTime }}</span>
                      </div>
                      <div>
                        <span
                          style="
                            width: 120px;
                            display: inline-block;
                            text-align: center;
                            margin: 10px 26px;
                          "
                          >告警历时</span
                        >
                        <span>几秒</span>
                      </div>
                      <div>
                        <span
                          style="
                            width: 120px;
                            display: inline-block;
                            text-align: center;
                            margin: 10px 26px;
                          "
                          >事件</span
                        >
                        <span>{{ record.reportAnEmergency }}</span>
                      </div>
                      <div>
                        <span
                          style="
                            width: 120px;
                            display: inline-block;
                            text-align: center;
                            margin: 10px 26px;
                          "
                          >站点</span
                        >
                        <span>{{ record.station }}</span>
                      </div>
                      <div>
                        <span
                          style="
                            width: 120px;
                            display: inline-block;
                            text-align: center;
                            margin: 10px 26px;
                          "
                          >设备</span
                        >
                        <span
                          >{{ record.equipment }} (设备编码：cdn3u81npq4)</span
                        >
                      </div>
                      <div>
                        <span
                          style="
                            width: 120px;
                            display: inline-block;
                            text-align: center;
                            margin: 10px 26px;
                          "
                          >告警类型</span
                        >
                        <span>{{ record.AlarmType }}</span>
                      </div>
                      <div>
                        <span
                          style="
                            width: 120px;
                            display: inline-block;
                            text-align: center;
                            margin: 10px 26px;
                          "
                          >告警级别</span
                        >
                        <span style="background-color: red">{{
                          record.AlarmLevel
                        }}</span>
                      </div>
                      <div>
                        <span
                          style="
                            width: 120px;
                            display: inline-block;
                            text-align: center;
                            margin: 10px 26px;
                          "
                          >确认信息</span
                        >
                        <span
                          ><input
                            style="width: 400px; height: 80px"
                            type="area"
                        /></span>
                      </div>
                      <div>
                        <span
                          style="
                            width: 120px;
                            display: inline-block;
                            text-align: center;
                            margin: 10px 26px;
                          "
                          >关联告警</span
                        >
                        <span>{{ record.reportAnEmergency }}</span>
                        <span style="margin-left: 120px">{{
                          record.occurrenceTime
                        }}</span>
                      </div>
                    </a-tab-pane>
                  </a-tabs>
                </div>
              </a-modal>
            </template>
          </a-table-column>
          <a-table-column
            :sortable="sortable"
            data-index="operate"
            title="操作"
          >
          </a-table-column>
        </template>
      </a-table>
      <a-pagination
        v-modal="pagination"
        :total="data.length"
        show-jumper
        show-page-size
        show-total
        @change="handleChange"
        @page-size-change="pageHandleChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';

  const rangeValue = ref([Date.now(), Date.now()]);
  const rowSelection = reactive({
    type: 'checkbox',
    showCheckedAll: true,
    onlyCurrent: false,
  });
  const pagination = ref({
    pageSize: 10,
  });
  const pageHandleChange = (key) => {
    pagination.value.pageSize = key;
  };
  const handleChangePage = (item, key) => {
    console.log(item);
    console.log(key);
  };
  const handleChange = (key) => {
    //   pagination.value.page = key;
  };

  const visible = ref(false);
  const viewClick = () => {
    visible.value = true;
  };

  const handleOk = () => {
    visible.value = false;
  };
  const handleCancel = () => {
    visible.value = false;
  };
  const sortable = ref({
    sortDirections: ['descend'],
  });

  const data = ref([
    {
      occurrenceTime: '1',
      acknowledgingTime: 'Jane Doe',
      reportAnEmergency: 23000,
      station: '32 Park Road, London',
      equipment: 'jane.doe@example.com',
      AlarmType: '12345',
      details: 'Alex',
      operate: '自动确认',
      isShow: 'false',
      disabled: true,
    },
    {
      occurrenceTime: '2',
      acknowledgingTime: 'Jane Doe',
      reportAnEmergency: 23000,
      station: '32 Park Road, London',
      equipment: 'jane.doe@example.com',
      AlarmType: '12345',
      details: 'Alex',
      operate: 'we',
      isShow: 'true',
    },
    {
      occurrenceTime: '1',
      acknowledgingTime: 'Jane Doe',
      reportAnEmergency: 23000,
      station: '32 Park Road, London',
      equipment: 'jane.doe@example.com',
      AlarmType: '12345',
      details: 'Alex',
      operate: 'we',
      isShow: 'true',
    },
    {
      occurrenceTime: '1',
      acknowledgingTime: 'Jane Doe',
      reportAnEmergency: 23000,
      station: '32 Park Road, London',
      equipment: 'jane.doe@example.com',
      AlarmType: '12345',
      details: 'Alex',
      operate: 'we',
      isShow: 'true',
    },
    {
      occurrenceTime: '1',
      acknowledgingTime: 'Jane Doe',
      reportAnEmergency: 23000,
      station: '32 Park Road, London',
      equipment: 'jane.doe@example.com',
      AlarmType: '12345',
      details: 'Alex',
      operate: 'we',
      isShow: 'true',
    },
    {
      occurrenceTime: '1',
      acknowledgingTime: 'Jane Doe',
      reportAnEmergency: 23000,
      station: '32 Park Road, London',
      equipment: 'jane.doe@example.com',
      AlarmType: '12345',
      details: 'Alex',
      operate: 'we',
      isShow: 'true',
    },
    {
      occurrenceTime: '1',
      acknowledgingTime: 'Jane Doe',
      reportAnEmergency: 23000,
      station: '32 Park Road, London',
      equipment: 'jane.doe@example.com',
      AlarmType: '12345',
      details: 'Alex',
      operate: 'we',
      isShow: 'true',
    },
    {
      occurrenceTime: '1',
      acknowledgingTime: 'Jane Doe',
      reportAnEmergency: 23000,
      station: '32 Park Road, London',
      equipment: 'jane.doe@example.com',
      AlarmType: '12345',
      details: 'Alex',
      operate: 'we',
      isShow: 'true',
    },
    {
      occurrenceTime: '1',
      acknowledgingTime: 'Jane Doe',
      reportAnEmergency: 23000,
      station: '32 Park Road, London',
      equipment: 'jane.doe@example.com',
      AlarmType: '12345',
      details: 'Alex',
      operate: 'we',
      isShow: 'true',
    },
    {
      occurrenceTime: '1',
      acknowledgingTime: 'Jane Doe',
      reportAnEmergency: 23000,
      station: '32 Park Road, London',
      equipment: 'jane.doe@example.com',
      AlarmType: '12345',
      details: 'Alex',
      operate: 'we',
      isShow: 'true',
    },
    {
      occurrenceTime: '1',
      acknowledgingTime: 'Jane Doe',
      reportAnEmergency: 23000,
      station: '32 Park Road, London',
      equipment: 'jane.doe@example.com',
      AlarmType: '12345',
      details: 'Alex',
      operate: 'we',
      isShow: 'true',
    },
    {
      occurrenceTime: '1',
      acknowledgingTime: 'Jane Doe',
      reportAnEmergency: 23000,
      station: '32 Park Road, London',
      equipment: 'jane.doe@example.com',
      AlarmType: '12345',
      details: 'Alex',
      operate: 'we',
      isShow: 'true',
    },
    {
      occurrenceTime: '1',
      acknowledgingTime: 'Jane Doe',
      reportAnEmergency: 23000,
      station: '32 Park Road, London',
      equipment: 'jane.doe@example.com',
      AlarmType: '12345',
      details: 'Alex',
      operate: 'we',
      isShow: 'true',
    },
    {
      occurrenceTime: '1',
      acknowledgingTime: 'Jane Doe',
      reportAnEmergency: 23000,
      station: '32 Park Road, London',
      equipment: 'jane.doe@example.com',
      AlarmType: '12345',
      details: 'Alex',
      operate: 'we',
      isShow: 'true',
    },
    {
      occurrenceTime: '1',
      acknowledgingTime: 'Jane Doe',
      reportAnEmergency: 23000,
      station: '32 Park Road, London',
      equipment: 'jane.doe@example.com',
      AlarmType: '12345',
      details: 'Alex',
      operate: 'we',
      isShow: 'true',
    },
  ]);
  const checkbox1 = ref(true);
  const dataList = data.value;
  console.log(dataList);
  if (checkbox1.value === true) {
    data.value = data.value.filter((item) => {
      if (item.isShow.indexOf('true') !== -1) {
        //   data.value.push(item);
        return false;
      }
      return data.value;
    });
  }

  const handleChangeCheckbox = () => {
    checkbox1.value = !checkbox1.value;
    console.log(checkbox1.value);
    if (checkbox1.value === true) {
      data.value = data.value.filter((item) => {
        if (item.isShow.indexOf('true') !== -1) {
          //   data.value.push(item);
          return false;
        }
        return data.value;
      });
    } else if (checkbox1.value === false) {
      data.value = [];
      data.value = dataList;
    }
  };
  const handleChangeCheckbox2 = () => {};
</script>

<style lang="less" scoped>
  .container {
    padding: 10px;
  }

  .container-body {
    padding: 10px 0;
  }
</style>
