<template>
  <div class="container">
    <div v-show="isShow" class="container-body">
      <div class="container-body-header">
        <span>统计时间: </span>
        <a-range-picker v-model="rangeValue" style="width: 300px" />
      </div>
      <a-table
        :bordered="{ wrapper: true, cell: true }"
        :data="data"
        style="margin-top: 30px"
      >
        <template #columns>
          <a-table-column data-index="name" title="站点名称"></a-table-column>
          <a-table-column :sortable="sortable" data-index="salary" title="总数">
            <template #cell="{ record }">
              <div
                style="
                  width: 100px;
                  cursor: pointer;
                  background: linear-gradient(to right, #89c3f2, #313134);
                "
                @click="divClick"
              >
                {{ record.salary }}
              </div>
            </template>
          </a-table-column>
          <a-table-column
            :sortable="sortable"
            data-index="address"
            title="故障"
          ></a-table-column>
          <a-table-column
            :sortable="sortable"
            data-index="email"
            title="一级告警"
          >
            <template #cell="{ record }">
              <div
                style="
                  width: 100px;
                  cursor: pointer;
                  background: linear-gradient(to right, #fe0400, #313134);
                "
                @click="divClick"
              >
                {{ record.salary }}
              </div>
            </template>
          </a-table-column>
          <a-table-column
            :sortable="sortable"
            data-index="two"
            title="二级告警"
          >
          </a-table-column>
          <a-table-column
            :sortable="sortable"
            data-index="two"
            title="三级告警"
          >
          </a-table-column>
          <a-table-column
            :sortable="sortable"
            data-index="two"
            title="四级告警"
          >
          </a-table-column>
          <a-table-column
            :sortable="sortable"
            data-index="two"
            title="五级告警"
          >
          </a-table-column>
          <a-table-column
            :sortable="sortable"
            data-index="two"
            title="六级告警"
          >
          </a-table-column>
          <a-table-column :sortable="sortable" data-index="two" title="事件">
          </a-table-column>
        </template>
      </a-table>
    </div>
    <div v-show="isShowTwo" class="container-main">
      <div class="container-main-header">
        <a-button style="float: left" @click="backClick"> 返回</a-button>
        <span>站点【{{ dataList.PrimaryName }}】</span>
      </div>
      <div class="container-main-content">
        <a-table
          :bordered="{ wrapper: true, cell: true }"
          :data="dataTwo"
          style="margin-top: 30px"
        >
          <template #columns>
            <a-table-column data-index="occurrenceTime" title="发生时间">
            </a-table-column>
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
                            >{{
                              record.equipment
                            }}
                            (设备编码：cdn3u81npq4)</span
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
                              name=""
                              style="width: 400px; height: 80px"
                              type="area"
                              value=""
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
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { useUserDataList } from '@/store';

  const dataList = useUserDataList();
  const rangeValue = ref([Date.now(), Date.now()]);

  const isShow = ref(true);
  const isShowTwo = ref(false);
  const handleClick = (record) => {
    console.log(record);
  };

  const divClick = () => {
    isShow.value = !isShow.value;
    isShowTwo.value = !isShowTwo.value;
  };
  const backClick = () => {
    isShow.value = !isShow.value;
    isShowTwo.value = !isShowTwo.value;
  };
  const visible = ref(false);
  const viewClick = (record) => {
    console.log(record);
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
  const data = reactive([
    {
      key: '1',
      name: `嘉德广场`,
      salary: 23000,
      address: '32 Park Road, London',
      email: 'jane',
    },
    {
      key: '2',
      name: `嘉德广场`,
      salary: 2000,
      address: '32 Park Road, London',
      email: 'jane',
      two: '12312',
    },
  ]);
  const dataTwo = ref([
    {
      occurrenceTime: '2023-06-15 16:13:59',
      acknowledgingTime: '2023-06-15 16:13:59',
      reportAnEmergency: '[模拟通讯设备] 设备离线 恢复',
      station: '嘉德广场',
      equipment: '模拟通讯设备',
      AlarmType: '设备离线',
      AlarmLevel: '一级告警',
      operate: '自动确认',
    },
  ]);
</script>

<style lang="less" scoped>
  * {
    color: white;
  }

  .container {
    padding: 10px;

    &-main {
      &-header {
        text-align: center;
        font-size: 18px;
      }

      &-content {
      }
    }
  }

  :deep(.arco-table .arco-table-element) {
    margin: 0;
  }

  :deep(.arco-tabs-nav::before) {
    background-color: #2a2a2b;
  }
</style>
