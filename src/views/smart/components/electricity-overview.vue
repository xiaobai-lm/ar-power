<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import * as echarts from 'echarts';

  const chartLeft = ref();
  const chartRight = ref();
  const columns = [
    { title: '站点名称', dataIndex: 'title' },
    { title: '分组', dataIndex: 'group' },
    { title: '状态', dataIndex: 'title' },
    { title: '容量（kWp）', dataIndex: 'title' },
    { title: '实时功率（kW）', dataIndex: 'title' },
    { title: '本日发电量（kWh）', dataIndex: 'title' },
    { title: '本月发电量（MWh）', dataIndex: 'title' },
    { title: '总发电量（MWh）', dataIndex: 'title' },
  ];

  onMounted(() => {
    const myChart = echarts.init(chartLeft.value);
    const myCharts = echarts.init(chartRight.value);
    const option = {
      xAxis: {
        type: 'category',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
      yAxis: {
        type: 'value',
      },
      grid: {
        height: '75%',
        width: '80%',
        top: '8%',
        left: '5%',
      },
      series: {
        name: '实际用能',
        type: 'bar',
        smooth: true,
        data: [1, 2, 3, 8, 15, 16, 15, 3, 2],
      },
    };
    myChart.setOption(option);
    myCharts.setOption(option);
  });
</script>

<template>
  <div class="electricity"
    ><div class="electricity-top"
      ><div class="electricity-topLeft"
        ><a-row class="grid-demo" :gutter="[12, 12]">
          <a-col :span="8">
            <div class="item">
              <div class="itemContent"
                ><div>总实时功率</div>
                <div style="margin-top: 15px"
                  ><span class="color size">167.90</span>
                  <span class="color">kw</span></div
                >
              </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="item">
              <div class="itemContent"
                ><div>本日发电量</div>
                <div style="margin-top: 15px"
                  ><span class="color size">2.585</span>
                  <span class="color">MWh</span></div
                >
              </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="item">
              <div class="itemContent"
                ><div>本月发电量</div>
                <div style="margin-top: 15px"
                  ><span class="color size">31.299</span>
                  <span class="color">MWh</span></div
                >
              </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="item">
              <div class="itemContent"
                ><div>总装机容量</div>
                <div style="margin-top: 15px"
                  ><span class="color size">167.90</span>
                  <span class="color">kWp</span></div
                >
              </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="item">
              <div class="itemContent"
                ><div>本年发电量</div>
                <div style="margin-top: 15px"
                  ><span class="color size">43,681.081</span>
                  <span class="color">MWh</span></div
                >
              </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="item">
              <div class="itemContent"
                ><div>总发电量</div>
                <div style="margin-top: 15px"
                  ><span class="color size">167.90</span>
                  <span class="color">MWh</span></div
                >
              </div>
            </div>
          </a-col>
        </a-row></div
      ><div class="electricity-topRight"
        ><a-row class="grid-demo" :gutter="12">
          <a-col :span="6">
            <div class="item"
              ><div class="icon"></div
              ><div style="position: relative; top: 60px"
                ><span class="color size">1,788.51</span><span>吨</span></div
              ><div style="position: relative; top: 60px">减排CO2</div></div
            >
          </a-col>
          <a-col :span="6">
            <div class="item"
              ><div class="icon"></div
              ><div style="position: relative; top: 60px"
                ><span class="color size">724.73</span><span>吨</span></div
              ><div style="position: relative; top: 60px">节约标准煤</div></div
            >
          </a-col>
          <a-col :span="6">
            <div class="item"
              ><div class="icon"></div
              ><div style="position: relative; top: 60px"
                ><span class="color size">96,870</span><span>棵</span></div
              ><div style="position: relative; top: 60px">等效植树</div></div
            >
          </a-col>
          <a-col :span="6">
            <div class="item"
              ><div class="icon"></div
              ><div style="position: relative; top: 60px"
                ><span class="color size">1,788.51</span><span>吨</span></div
              ><div style="position: relative; top: 60px">减排SO2</div></div
            >
          </a-col>
        </a-row></div
      ></div
    >
    <div class="electricity-content">
      <div class="content-left"
        ><div class="content-leftTop"
          ><a-space
            ><span class="color" style="font-size: large; margin-left: 15px"
              >发电量趋势</span
            ><a-radio-group
              style="position: absolute; right: 0"
              type="button"
              size="mini"
              default-value="Beijing"
            >
              <a-radio value="Beijing">日</a-radio>
              <a-radio value="Shanghai">月</a-radio>
              <a-radio value="Guangzhou">年</a-radio>
            </a-radio-group></a-space
          ></div
        >
        <div ref="chartLeft" style="width: 100%; height: 200px"></div
      ></div>
      <div class="content-right"
        ><div
          ><div class="content-leftTop">
            <a-space
              ><a-radio-group type="button" size="large" default-value="mini">
                <a-radio value="mini">等效利用小时排名 </a-radio>
                <a-radio value="small">发电效率排名</a-radio>
                <a-radio value="medium">发电量排名</a-radio> </a-radio-group
              ><a-radio-group
                style="position: absolute; right: 0"
                type="button"
                size="mini"
                default-value="Beijing"
              >
                <a-radio value="Beijing">日</a-radio>
                <a-radio value="Shanghai">月</a-radio>
                <a-radio value="Guangzhou">年</a-radio>
              </a-radio-group></a-space
            >
          </div>
          <div ref="chartRight" style="width: 100%; height: 200px"></div> </div
      ></div>
    </div>
    <div class="electricity-footer">
      <div class="content-leftTop">
        <a-space
          ><a-divider
            direction="vertical"
            style="border: #245daf solid 2px; height: 25px; margin-left: 0"
          /><span style="font-size: large" class="size color"
            >站点列表（总数：3）</span
          ><div
            style="
              display: flex;
              height: 100%;
              width: 450px;
              position: absolute;
              right: 0;
            "
            ><a-alert type="success" style="background-color: #343435"
              ><span class="color">正常：1</span></a-alert
            ><a-alert type="normal" style="background-color: #343435"
              ><template #icon> <icon-exclamation-circle-fill /> </template
              ><span class="color">离线：0 </span></a-alert
            ><a-alert type="error" style="background-color: #343435"
              ><span class="color">故障：0</span></a-alert
            ><a-alert type="warning" style="background-color: #343435"
              ><span class="color">告警：2</span></a-alert
            ></div
          ></a-space
        >
      </div>
      <div class="footer-content">
        <a-table :columns="columns" style="height: 200px"></a-table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .electricity {
    width: 97%;
    margin: 10px 20px;
    color: #c7c6c6;
    .electricity-top {
      width: 100%;
      display: flex;
      .electricity-topLeft {
        width: 60%;
        margin-right: 5px;
        .item {
          background-color: #232324;
          height: 100px;
          .itemContent {
            margin-left: 20px;
            padding-top: 10px;
          }
        }
      }
      .electricity-topRight {
        width: 40%;
        margin-left: 5px;
        .item {
          background-color: #232324;
          height: 212px;
          text-align: center;
          width: 100%;
          .icon {
            width: 50%;
            border: #696e6e solid;
            margin-left: 25%;
            height: 60px;
            position: relative;
            top: 30px;
          }
        }
      }
    }
    .electricity-content {
      width: 100%;
      margin-top: 10px;
      display: flex;
      .content-left {
        background-color: #232323;

        width: 49%;
        margin-right: 8px;
        height: 240px;
        .content-leftTop {
          height: 40px;
          width: 100%;
          background-color: #343435;
          position: relative;
          line-height: 40px;
        }
      }
      .content-right {
        background-color: #232323;

        position: relative;
        width: 50%;
        margin-left: 5px;
        height: 240px;
        .content-leftTop {
          height: 40px;
          width: 100%;
          background-color: #343435;
          position: relative;
          line-height: 40px;
        }
      }
    }
    .electricity-footer {
      position: relative;
      width: 100%;
      margin-top: 10px;
      .content-leftTop {
        height: 40px;
        width: 100%;
        background-color: #343435;
        position: relative;
        line-height: 40px;
      }
    }
  }
  .size {
    font-size: 24px;
  }

  .color {
    color: white;
  }
</style>
