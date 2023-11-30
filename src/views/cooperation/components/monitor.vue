<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import * as echarts from 'echarts';

  const changePage = ref(true);
  const visible = ref(false);
  const chart = ref();
  const columns = [
    {
      title: '序号',
      dataIndex: 'serialId',
    },
    {
      title: '状态',
      dataIndex: 'state',
    },
    {
      title: '名称',
      dataIndex: 'title',
    },
    {
      title: '响应日期',
      dataIndex: 'responseDate',
    },
    {
      title: '响应时段',
      dataIndex: 'responseTime',
    },
    {
      title: '区域',
      dataIndex: 'area',
    },
    {
      title: '计划响应负荷 (kW)',
      dataIndex: 'load',
    },
    {
      title: '邀约站点数 (个))',
      dataIndex: 'title',
    },
    {
      title: '响应负荷 (kW) ',
      dataIndex: 'title',
    },
    {
      title: '响应电量 (kWh)',
      dataIndex: 'title',
    },
    {
      title: '响应负荷达成率 (%)',
      dataIndex: 'title',
    },
    {
      title: '响应负荷有效率 (%)',
      dataIndex: 'title',
    },
    {
      title: '操作',
      slotName: 'do',
    },
  ];
  const data = [
    {
      serialId: 1,
      state: '等待邀约(已超时)',
      title: '2020夏季响应试点06',
    },
  ];
  const xDay: any = [
    '00:00',
    '00:15',
    '00:30',
    '00:45',
    '01:00',
    '01:15',
    '01:30',
    '01:45',
    '02:00',
    '02:15',
    '02:30',
    '02:45',
    '03:00',
    '03:15',
    '03:30',
    '03:45',
    '04:00',
    '04:15',
    '04:30',
    '04:45',
    '05:00',
    '05:15',
    '05:30',
    '05:45',
    '06:00',
    '06:15',
    '06:30',
    '06:45',
    '07:00',
    '07:15',
    '07:30',
    '07:45',
    '08:00',
    '08:15',
    '08:30',
    '08:45',
    '09:00',
    '09:15',
    '09:30',
    '09:45',
    '10:00',
    '10:15',
    '10:30',
    '10:45',
    '11:00',
    '11:15',
    '11:30',
    '11:45',
    '12:00',
    '12:15',
    '12:30',
    '12:45',
    '13:00',
    '13:15',
    '13:30',
    '13:45',
    '14:00',
    '14:15',
    '14:30',
    '14:45',
    '15:00',
    '15:15',
    '15:30',
    '15:45',
    '16:00',
    '16:15',
    '16:30',
    '16:45',
    '17:00',
    '17:15',
    '17:30',
    '17:45',
    '18:00',
    '18:15',
    '18:30',
    '18:45',
    '19:00',
    '19:15',
    '19:30',
    '19:45',
    '20:00',
    '20:15',
    '20:30',
    '20:45',
    '21:00',
    '21:15',
    '21:30',
    '21:45',
    '22:00',
    '22:15',
    '22:30',
    '22:45',
    '23:00',
    '23:15',
    '23:30',
    '23:45',
  ];

  const detail = () => {
    changePage.value = !changePage.value;
    setTimeout(() => {
      const myChart = echarts.init(chart.value);
      const option = {
        xAxis: {
          type: 'category',
          data: xDay,
        },
        yAxis: {
          type: 'value',
        },
        grid: {
          height: '85%',
          width: '85%',
          top: '5%',
          left: '8%',
        },
        series: {
          name: '实际用能',
          type: 'line',
          smooth: true,
          data: [0],
        },
      };
      myChart.setOption(option);
    }, 100);
  };
  const handleClick = () => {
    visible.value = true;
    console.log(1);
  };
  const handleBeforeOk = () => {};
  const handleCancel = () => {
    visible.value = false;
  };
</script>

<template>
  <div v-if="changePage" class="monitor">
    <div class="header">
      <a-space size="large">
        <a-radio-group type="button" default-value="Beijing">
          <a-radio value="Beijing" class="top">执行中</a-radio>
          <a-radio value="Shanghai" class="top">执行完毕</a-radio>
        </a-radio-group>
        <a-button class="top"
          ><icon-upload /><span style="margin-left: 10px">导出</span></a-button
        >
      </a-space>
      <div class="right">
        <a-input-search placeholder="搜索名称"></a-input-search>
      </div>
    </div>
    <div class="content">
      <div class="table"
        ><a-table :columns="columns" :data="data">
          <template #do>
            <a-button @click="detail">详情</a-button>
          </template>
        </a-table></div
      >
    </div>
  </div>
  <div v-else class="monitor"
    ><div class="header"
      ><a-space size="large">
        <div
          ><a-divider
            direction="vertical"
            style="border: #245daf solid 2px; height: 25px; margin-left: 0"
          /><span style="font-size: large" class="textColor"
            >2020夏季响应试点05</span
          ></div
        >
        <a-button @click="changePage = !changePage">返回列表</a-button>
        <div>
          <span style="font-size: large" class="textColor">等待邀约</span
          ><span>(已超时)</span>
        </div>
      </a-space></div
    >
    <div class="contentT">
      <a-row class="grid-demo">
        <a-col :span="18">
          <div class="left-content-top"
            ><a-row class="grid-demo">
              <a-col :span="10" class="top-left">
                <div class="left-content">
                  <a-row class="grid-demo">
                    <a-col :span="8">
                      <div>申报响应负荷</div>
                      <div>-</div>
                    </a-col>
                    <a-col :span="8">
                      <div>计划响应负荷</div>
                      <div style="font-size: large" class="textColor">
                        4700kW</div
                      >
                    </a-col>
                    <a-col :span="8">
                      <div>响应电量</div>
                      <div>-</div>
                    </a-col>
                    <a-col :span="8">
                      <div>响应负荷</div>
                      <div>-</div>
                    </a-col>
                    <a-col :span="8">
                      <div>响应负荷达成率</div>
                      <div>-</div>
                    </a-col>
                    <a-col :span="8">
                      <div>补贴金额</div>
                      <div>-</div>
                    </a-col>
                  </a-row>
                </div>
              </a-col>
              <a-col :span="14"
                ><div class="top-right"
                  ><div>
                    <a-row class="grid-demo top-right-content">
                      <a-col :span="8"
                        ><div
                          ><span style="margin-right: 10px"
                            >参与站点数
                          </span></div
                        ><span class="textColor">0</span><span>个</span></a-col
                      >
                      <a-col :span="8"
                        ><div
                          ><span style="margin-right: 10px"
                            >有效响应站点数
                          </span></div
                        ><span class="textColor">0</span><span>个</span></a-col
                      >
                      <a-col :span="8"
                        ><div
                          ><span style="margin-right: 10px"
                            >响应负荷有效率
                          </span></div
                        ><span class="textColor">-</span><span></span
                      ></a-col>
                    </a-row>
                  </div>
                </div>
                <div style="margin-top: 10px; display: flex" class="top-right"
                  ><div style="width: 150px; height: 59px"
                    ><div style="margin-left: 20px; padding-top: 5px"
                      ><span style="font-size: large"
                        >站点响应负荷达成率分布</span
                      >
                    </div></div
                  ><a-button
                    type="text"
                    style="margin: 10px 0 0 300px"
                    @click="handleClick"
                    >站点详情</a-button
                  ><a-modal
                    v-model:visible="visible"
                    title="站点明细表"
                    width="1500px"
                    @cancel="handleCancel"
                    @ok="handleBeforeOk"
                  >
                    <div style="margin-bottom: 10px">
                      <a-space size="large"
                        ><a-input-search></a-input-search
                        ><a-button class="top"
                          ><icon-upload /><span style="margin-left: 10px"
                            >导出</span
                          ></a-button
                        ></a-space
                      >
                    </div>
                    <a-table :columns="columns"></a-table> </a-modal
                ></div>
              </a-col> </a-row
          ></div>
          <div class="letf-centent"
            ><a-row class="grid-demo">
              <a-col :span="4">
                <div>
                  <div class="letf-centent-left"
                    ><div>基线负荷</div>
                    <div>-</div>
                    <a-divider class="half-divider"
                  /></div>
                  <div class="letf-centent-left"
                    ><div>实时负荷</div>
                    <div>-</div>
                    <a-divider class="half-divider"
                  /></div>
                  <div class="letf-centent-left"
                    ><div>最大响应负荷</div>
                    <div>-</div>
                    <a-divider class="half-divider"
                  /></div>
                  <div class="letf-centent-left"
                    ><div>最小响应负荷</div>
                    <div>-</div>
                  </div>
                </div>
              </a-col>
              <a-col :span="12">
                <div
                  ><div style="height: 30px; background-color: #343435"
                    ><span
                      class="textColor"
                      style="line-height: 30px; margin-left: 10px"
                      >负荷曲线</span
                    ></div
                  ><div ref="chart" style="width: 100%; height: 290px"> </div
                ></div>
              </a-col>
              <a-col :span="8">
                <div
                  ><div style="height: 30px; background-color: #343435"
                    ><span
                      class="textColor"
                      style="line-height: 30px; margin-left: 10px"
                      >分时用电</span
                    ></div
                  >
                  <div
                    ><a-date-picker
                      style="
                        width: 150px;
                        background-color: #232323;
                        border: #7d807d solid 1px;
                      "
                    ></a-date-picker
                    ><a-date-picker
                      style="
                        width: 150px;
                        background-color: #232323;
                        border: #7d807d solid 1px;
                        margin-left: 10px;
                      "
                      default-value="[2023-08-01]"
                    ></a-date-picker
                  ></div>
                </div>
              </a-col> </a-row
          ></div>
          <div class="content1">
            <a-row class="grid-demo" :gutter="10">
              <a-col :span="6">
                <div
                  ><div class="footer"
                    ><span>不同负荷申报站点数占比</span></div
                  ></div
                >
              </a-col>
              <a-col :span="6">
                <div
                  ><div class="footer"
                    ><span>不同负荷响应负荷占比 </span></div
                  ></div
                >
              </a-col>
              <a-col :span="6">
                <div
                  ><div class="footer"
                    ><span>不同行业响应负荷占比</span></div
                  ></div
                >
              </a-col>
              <a-col :span="6">
                <div
                  ><div class="footer"
                    ><span>不同区域响应负荷占比</span></div
                  ></div
                >
              </a-col>
            </a-row></div
          >
        </a-col>
        <a-col :span="6">
          <div class="contentT-right"
            ><div class="right-top"
              ><div style="height: 300px">
                <div>
                  <a-row class=".grid-demo">
                    <a-col :span="6"
                      ><div
                        style="
                          border: #1da8ff 1px solid;
                          width: 60px;
                          height: 60px;
                          margin-top: 5px;
                        "
                      ></div
                    ></a-col>
                    <a-col :span="18" style="margin-top: 5px">
                      <div class="textColor">2020夏季响应试点02</div>

                      <div>浙江/杭州市/余杭区</div>
                      <div>创建时间：2020-07-24 15:30:52</div>
                    </a-col>
                  </a-row>
                  <a-divider class="half-divider" />
                </div>
                <div style="display: flex; font-size: large">
                  <div style="width: 50%"
                    ><div>类型</div>
                    <div class="textColor" style="margin-top: 10px">削峰</div
                    ><a-divider class="half-divider" /><div>响应日期</div
                    ><div class="textColor" style="margin-top: 10px"
                      >2020-08-28</div
                    ></div
                  >
                  <div style="width: 50%"
                    ><div>创建人</div>
                    <div class="textColor" style="margin-top: 10px"
                      >运维管理员A</div
                    ><a-divider class="half-divider" /><div>响应时段</div
                    ><div class="textColor" style="margin-top: 10px"
                      >12:00~13:00</div
                    ></div
                  >
                </div>
              </div>
            </div>
            <div style="margin: 20px 12px"
              ><a-divider
                direction="vertical"
                style="border: #245daf solid 2px; height: 25px; margin-left: 0"
              /><span style="font-size: large" class="textColor">基本信息</span>
              <div class="right-content"
                ><div style="font-size: large; margin-right: 15px"
                  >基线计算方式</div
                >
                <div class="textColor">5日均线</div></div
              >
              <div class="right-content"
                ><div style="font-size: large; margin-right: 15px"
                  >补贴标准</div
                >
                <div class="textColor">2020夏季约定</div></div
              >
              <div class="right-content"
                ><div style="font-size: large; margin-right: 15px"
                  >补贴类型</div
                >
                <div class="textColor">价格型</div></div
              >
              <div class="right-content"
                ><div style="font-size: large; margin-right: 15px"
                  >补贴价格</div
                >
                <div class="textColor">30元</div></div
              >
              <div class="right-content"
                ><div style="font-size: large; margin-right: 15px">
                  计价方式</div
                >
                <div class="textColor">元/千瓦</div></div
              >
              <div class="right-content"
                ><div style="font-size: large; margin-right: 15px"
                  >补贴方式
                </div>
                <div class="textColor">-</div></div
              >
              <div class="right-content"
                ><div style="font-size: large; margin-right: 15px"
                  >邀约截止时间</div
                >
                <div class="textColor">-</div></div
              >
              <div class="right-content"
                ><div style="font-size: large; margin-right: 15px">描述</div>
                <div class="textColor">测试</div></div
              >
            </div>
          </div>
        </a-col>
      </a-row></div
    >
  </div>
</template>

<style scoped lang="less">
  .monitor {
    margin: 15px;
    color: #c7c6c6;
    .header {
      width: 100%;
      .top {
        font-size: medium;
      }
      .right {
        float: right;
      }
    }

    .content {
      background-color: #232324;
      height: 500px;
      width: 100%;
      .table {
        margin: 15px;
      }
    }
    .top1 {
      height: 30px;
    }
    .contentT {
      width: 100%;
      height: 900px;
      margin-top: 10px;
      .left-content-top {
        margin-bottom: 10px;
        .top-left {
          background-color: #030325;
          border-radius: 8px;
          .left-content {
            margin: 5px 10px;
          }
          div {
            margin: 10px 0;
          }
        }
        .top-right {
          margin: 0 10px;
          background-color: #232323;
          .top-right-content {
            div {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 120px;
            }
          }
        }
      }

      .letf-centent {
        .grid-demo .arco-col > div {
          margin-right: 10px;
          background-color: #232323;
          height: 320px;
          .letf-centent-left {
            margin-left: 10px;
            padding-top: 10px;
            div {
              margin-bottom: 10px;
            }
          }
        }
      }
      .content1 {
        height: 400px;
        width: 99%;
        margin-top: 15px;
        .grid-demo .arco-col {
          height: 48px;
          color: var(--color-white);
        }
        .grid-demo .arco-col > div {
          display: flex;
          //align-items: center;
          //justify-content: center;
          height: 450px;
          background-color: #232324;
          .footer {
            font-size: large;
            height: 40px;
            width: 100%;
            background-color: #343435;
            line-height: 40px;
            span {
              margin-left: 15px;
            }
          }
        }
      }
      .contentT-right {
        background-color: #232323;
        height: 940px;
        width: 100%;
        padding-top: 10px;
        .right-top {
          width: 92%;
          background-color: #181818;
          height: 300px;
          //margin-top: 10px;
          margin-left: 12px;
          display: flex;
          justify-content: center;
        }
        .right-content {
          background-color: #181818;
          border-radius: 8px;
          margin-top: 10px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .textColor {
      color: white;
      font-size: large;
    }
  }
</style>
