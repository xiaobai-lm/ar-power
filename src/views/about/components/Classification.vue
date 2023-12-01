<template>
  <div class="container">
    <div class="container-header">
      <span>类别:</span>
      <a-radio-group default-value="1">
        <a-radio value="1">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>
              <icon-fire />
            </a-tag>
          </template>
        </a-radio>
        <a-radio value="2">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>
              <icon-wifi />
            </a-tag>
          </template>
        </a-radio>
        <a-radio value="3">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>
              <icon-fire />
            </a-tag>
          </template>
        </a-radio>
      </a-radio-group>

      <span>标签:</span>
      <a-radio-group default-value="1">
        <a-radio value="1">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>
              <span>支路</span>
            </a-tag>
          </template>
        </a-radio>
        <a-radio value="2">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>
              <span>分项</span>
            </a-tag>
          </template>
        </a-radio>
        <a-radio value="3">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>
              <span>部门</span>
            </a-tag>
          </template>
        </a-radio>
      </a-radio-group>
      <span>选择支路:</span>
      <a-select :style="{ width: '320px' }" placeholder="Please select ...">
        <a-option>Beijing</a-option>
        <a-option>Shanghai</a-option>
        <a-option>Guangzhou</a-option>
      </a-select>
    </div>

    <div class="container-content">
      <a-row :gutter="10" style="margin-top: 10px">
        <a-col :span="4">
          <a-card>
            <div style="display: flex; justify-content: space-between">
              <div>本月用气(kWh)</div>
              <div>{{ mouth }}</div>
            </div>
            <div style="font-size: 30px; color: #0faaee">{{ mouthNumber }}</div>
            <a-divider></a-divider>
            <div>
              <span style="color: #6783a9">上月同期 5956.4</span>
              <span>13.51 <icon-caret-up /></span>
            </div>
          </a-card>
          <a-card style="margin-top: 10px">
            <div>
              <div>今日用气(kWh)</div>
              <div></div>
            </div>
            <div style="font-size: 30px; color: #0faaee">{{ mouthNumber }}</div>
            <a-divider></a-divider>
            <div>
              昨日同期 5956.4 <span>13.51 <icon-caret-down /></span>
            </div>
          </a-card>
          <a-card style="margin-top: 10px">
            <template #title> 今日支路用电 </template>
            <span>汇总设备(1778.59)/用电(12799.73)(kWh)</span>
            <div id="leftBottom"> </div>
          </a-card>
        </a-col>
        <a-col :span="20">
          <a-card>
            <div id="rightTop"></div>
          </a-card>
          <a-card style="margin-top: 10px">
            <a-row>
              <a-col :span="1">
                <a-radio-group default-value="1" direction="vertical">
                  <a-radio value="1">
                    <template #radio="{ checked }">
                      <a-tag :checked="checked" checkable>
                        <icon-fire />
                      </a-tag>
                    </template>
                  </a-radio>
                  <a-radio value="2">
                    <template #radio="{ checked }">
                      <a-tag :checked="checked" checkable>
                        <icon-wifi />
                      </a-tag>
                    </template>
                  </a-radio>
                  <a-radio value="3">
                    <template #radio="{ checked }">
                      <a-tag :checked="checked" checkable>
                        <icon-fire />
                      </a-tag>
                    </template>
                  </a-radio>
                </a-radio-group>
              </a-col>
              <a-col :span="18">
                <div id="rightBottom"></div>
              </a-col>
              <a-col :span="5">
                <div id="rightBottomRight"></div>
                <div id="rightBottomRightTwo"></div>
              </a-col>
            </a-row>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import * as echarts from 'echarts';
  import dayjs from 'dayjs';

  const mouthNumber = Number(6047.51).toLocaleString();
  const mouth = dayjs().format('M');

  onMounted(() => {
    const leftBottom = echarts.init(
      document.getElementById('leftBottom'),
      null,
      {
        height: 320,
      }
    );

    const leftBottomOptions = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
        textStyle: {
          color: 'white',
        },
      },

      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },

          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
        },
      ],
    };
    const rightTop = echarts.init(document.getElementById('rightTop'), null, {
      height: 320,
    });
    const rightTopOptions = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ],
    };

    const rightBottom = echarts.init(
      document.getElementById('rightBottom'),
      null,
      {
        height: 320,
      }
    );

    const rightBottomOptions = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ],
    };
    const rightBottomRight = echarts.init(
      document.getElementById('rightBottomRight'),
      null,
      {
        height: 160,
      }
    );

    const rightBottomRightOptions = {
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
        },
      ],
    };

    const rightBottomRightTwo = echarts.init(
      document.getElementById('rightBottomRightTwo'),
      null,
      {
        height: 160,
      }
    );

    const rightBottomRightTwoOptions = {
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
        },
      ],
    };
    leftBottom.setOption(leftBottomOptions);
    rightTop.setOption(rightTopOptions);
    rightBottom.setOption(rightBottomOptions);
    rightBottomRight.setOption(rightBottomRightOptions);
    rightBottomRightTwo.setOption(rightBottomRightTwoOptions);
    window.addEventListener('resize', () => {
      leftBottom.resize();
      rightTop.resize();
      rightBottom.resize();
      rightBottomRight.resize();
      rightBottomRightTwo.resize();
    });
  });
</script>

<style lang="less" scoped>
  .container {
    padding: 10px;

    &-header {
      margin-top: 10px !important;
      color: var(--color-text-2);

      span {
        margin-left: 10px;
      }
    }
  }

  .arco-tag-checked {
    padding: 20px 15px !important;
    color: #6c7fff;
    background-color: #6c7fff !important;
  }

  .arco-tag-checked:hover {
    padding: 20px !important;
    color: black !important;
    background-color: #6c7fff;
  }

  .arco-tag {
    width: 100%;
    padding: 20px 15px !important;
    background-color: #33404c;
    margin-left: 10px;
  }

  .arco-tag:hover {
    width: 100%;
    padding: 20px 15px !important;
    color: #6c7fff;
  }

  .arco-radio .arco-radio-disabled {
    color: black !important;
  }

  .arco-tag .arco-tag-size-medium .arco-tag-checkable {
    color: black !important;
  }

  .arco-tag > .arco-tag-size-medium > .arco-tag-checkable {
    color: black !important;
  }
</style>
