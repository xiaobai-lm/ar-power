<template>
  <div class="container">
    <div class="container-select">
      设备：<a-select :style="{ width: '300px' }">
        <a-option>Beijing</a-option>
        <a-option>Shanghai</a-option>
        <a-option>Guangzhou</a-option>
      </a-select>
      类型：<a-select :style="{ width: '300px' }">
        <a-option>Beijing</a-option>
        <a-option>Shanghai</a-option>
        <a-option>Guangzhou</a-option>
      </a-select>
      谐波次数：<a-select
        :style="{ width: '300px' }"
        multiple
        :scrollbar="scrollbar"
        :max-tag-count="2"
      >
        <a-option>Beijing</a-option>
        <a-option>Shanghai</a-option>
        <a-option>Guangzhou</a-option>
        <a-option>das</a-option>
        <a-option>dsadaw</a-option>
      </a-select>
      <a-radio-group v-model="checkValue" @change="checkValueClick">
        <a-radio value="1">按日</a-radio>
        <a-radio value="2">按月</a-radio>
      </a-radio-group>
      <a-date-picker
        v-if="checkValue === '1'"
        v-model="value"
        style="width: 200px"
      />
      <a-month-picker v-else v-model="value" style="width: 200px" />
      <a-button>查询</a-button>
      <a-radio-group v-model="radioValue" @change="hanleChange">
        <a-radio value="1">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>曲线</a-tag>
          </template>
        </a-radio>
        <a-radio value="2">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>表格</a-tag>
          </template>
        </a-radio>
      </a-radio-group>
    </div>
    <a-card v-show="isShow">
      <div id="Amutually"></div>
      <div id="Bmutually"></div>
      <div id="Cmutually"></div>
    </a-card>
    <a-card v-show="isShow2">
      <div id="AmutuallyTwo"></div>
      <div id="BmutuallyTwo"></div>
      <div id="CmutuallyTwo"></div>
    </a-card>
    <a-card v-show="isShowTwo">
      <a-table
        v-if="checkValue === '1'"
        :columns="columns"
        :data="data"
        :bordered="{ cell: true }"
      ></a-table>
      <a-table
        v-else
        :columns="columnsTwo"
        :data="dataTwo"
        :bordered="{ cell: true }"
      ></a-table>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted, reactive } from 'vue';
  import * as echarts from 'echarts';

  const scrollbar = ref(true);
  const checkValue = ref('1');
  const radioValue = ref('1');
  const value = Date.now();
  const isShow = ref(true);
  const isShow2 = ref(false);
  const isShowTwo = ref(false);

  const hanleChange = () => {
    console.log(radioValue.value);
    if (radioValue.value === '1') {
      isShow.value = true;
      isShowTwo.value = false;
    } else {
      isShow.value = false;
      isShowTwo.value = true;
    }
  };

  const columns = [
    {
      title: '描述(单位A)',
      dataIndex: 'name',
    },
    {
      title: 'A相',
      dataIndex: 'salary',
      children: [
        {
          title: '最小值',
          dataIndex: 'minValue',
        },
        {
          title: '最大值',
          dataIndex: 'maxValue',
        },
        {
          title: '最小值',
          dataIndex: 'averageValue',
        },
      ],
    },
    {
      title: 'A相',
      dataIndex: 'salary',
      children: [
        {
          title: '最小值',
          dataIndex: 'minValue',
        },
        {
          title: '最大值',
          dataIndex: 'maxValue',
        },
        {
          title: '最小值',
          dataIndex: 'averageValue',
        },
      ],
    },
  ];
  const data = reactive([
    {
      key: '1',
      name: 'das',
      salary: 'eqw',
      minValue: 'eqasd',
      maxValue: 'daz',
      averageValue: 'xcbd',
    },
    {
      key: '1',
      name: 'das',
      salary: 'eqw',
      minValue: 'eqasd',
      maxValue: 'daz',
      averageValue: 'xcbd',
    },
    {
      key: '1',
      name: 'das',
      salary: 'eqw',
      minValue: 'eqasd',
      maxValue: 'daz',
      averageValue: 'xcbd',
    },
    {
      key: '1',
      name: 'das',
      salary: 'eqw',
      minValue: 'eqasd',
      maxValue: 'daz',
      averageValue: 'xcbd',
    },
  ]);
  const columnsTwo = [
    {
      title: '描述(单位A)',
      dataIndex: 'name',
    },
    {
      title: 'A相',
      dataIndex: 'salary',
      children: [
        {
          title: '最小值',
          dataIndex: 'minValue',
        },
        {
          title: '最大值',
          dataIndex: 'maxValue',
        },
        {
          title: '最小值',
          dataIndex: 'averageValue',
        },
      ],
    },
    {
      title: 'A相',
      dataIndex: 'salary',
      children: [
        {
          title: '最小值',
          dataIndex: 'minValue',
        },
        {
          title: '最大值',
          dataIndex: 'maxValue',
        },
        {
          title: '最小值',
          dataIndex: 'averageValue',
        },
      ],
    },
  ];
  const dataTwo = reactive([
    {
      key: '1',
      name: 'das',
      salary: 'eqw',
      minValue: 'eqasd',
      maxValue: 'daz',
      averageValue: 'xcbd',
    },
  ]);
  onMounted(() => {
    const Amutually = echarts.init(document.getElementById('Amutually'), null, {
      height: 300,
    });
    const Bmutually = echarts.init(document.getElementById('Bmutually'), null, {
      height: 300,
    });
    const Cmutually = echarts.init(document.getElementById('Cmutually'), null, {
      height: 300,
    });

    // const AmutuallyTwo = echarts.init(document.getElementById("AmutuallyTwo"), null, {
    //     height: 300
    // })
    // const BmutuallyTwo = echarts.init(document.getElementById("BmutuallyTwo"), null, {
    //     height: 300
    // })
    // const CmutuallyTwo = echarts.init(document.getElementById("CmutuallyTwo"), null, {
    //     height: 300
    // })

    const AmutuallyOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true,
        },
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 0, 150, 80, 0, 110, 130],
          type: 'bar',
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
          },
        },
        {
          data: [120, 0, 150, 80, 0, 110, 130],
          type: 'bar',
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
          },
        },
      ],
    };
    const BmutuallyOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true,
        },
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 0, 150, 80, 0, 110, 130],
          type: 'bar',
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
          },
        },
        {
          data: [120, 0, 150, 80, 0, 110, 130],
          type: 'bar',
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
          },
        },
      ],
    };
    const CmutuallyOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true,
        },
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 0, 150, 80, 0, 110, 130],
          type: 'bar',
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
          },
        },
        {
          data: [120, 0, 150, 80, 0, 110, 130],
          type: 'bar',
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
          },
        },
      ],
    };

    // const AmutuallyOptionsTwo = {
    //     tooltip: {
    //         trigger: 'axis',
    //         axisPointer: {
    //             type: 'shadow'
    //         }
    //     },
    //     xAxis: {
    //         type: 'category',
    //         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    //         axisTick: {
    //             alignWithLabel: true
    //         }
    //     },
    //     yAxis: {
    //         type: 'value'
    //     },
    //     series: [
    //         {
    //             data: [20, 0, 50, 80, 0, 10, 30],
    //             type: 'bar',
    //             backgroundStyle: {
    //                 color: 'rgba(180, 180, 180, 0.2)'
    //             },
    //         },
    //         {
    //             data: [10, 0, 10, 80, 0, 11, 10],
    //             type: 'bar',
    //             backgroundStyle: {
    //                 color: 'rgba(180, 180, 180, 0.2)'
    //             },
    //         }
    //     ]
    // }
    // const BmutuallyOptionsTwo = {
    //     tooltip: {
    //         trigger: 'axis',
    //         axisPointer: {
    //             type: 'shadow'
    //         }
    //     },
    //     xAxis: {
    //         type: 'category',
    //         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    //         axisTick: {
    //             alignWithLabel: true
    //         }
    //     },
    //     yAxis: {
    //         type: 'value'
    //     },
    //     series: [
    //         {
    //             data: [120, 0, 150, 80, 0, 110, 130],
    //             type: 'bar',
    //             backgroundStyle: {
    //                 color: 'rgba(180, 180, 180, 0.2)'
    //             },
    //         },
    //         {
    //             data: [120, 0, 150, 80, 0, 110, 130],
    //             type: 'bar',
    //             backgroundStyle: {
    //                 color: 'rgba(180, 180, 180, 0.2)'
    //             },
    //         }
    //     ]
    // }
    // const CmutuallyOptionsTwo = {
    //     tooltip: {
    //         trigger: 'axis',
    //         axisPointer: {
    //             type: 'shadow'
    //         }
    //     },
    //     xAxis: {
    //         type: 'category',
    //         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    //         axisTick: {
    //             alignWithLabel: true
    //         }
    //     },
    //     yAxis: {
    //         type: 'value'
    //     },
    //     series: [
    //         {
    //             data: [120, 0, 150, 80, 0, 110, 130],
    //             type: 'bar',
    //             backgroundStyle: {
    //                 color: 'rgba(180, 180, 180, 0.2)'
    //             },
    //         },
    //         {
    //             data: [120, 0, 150, 80, 0, 110, 130],
    //             type: 'bar',
    //             backgroundStyle: {
    //                 color: 'rgba(180, 180, 180, 0.2)'
    //             },
    //         }
    //     ]
    // }

    Amutually.setOption(AmutuallyOptions);
    Bmutually.setOption(BmutuallyOptions);
    Cmutually.setOption(CmutuallyOptions);

    // AmutuallyTwo.setOption(AmutuallyOptionsTwo)
    // BmutuallyTwo.setOption(BmutuallyOptionsTwo)
    // CmutuallyTwo.setOption(CmutuallyOptionsTwo)

    window.addEventListener('resize', () => {
      Amutually.resize();
      Bmutually.resize();
      Cmutually.resize();
      // AmutuallyTwo.resize()
      // BmutuallyTwo.resize()
      // CmutuallyTwo.resize()
    });
  });
</script>

<style lang="less" scoped>
  .container {
    padding: 10px;

    &-select {
      color: var(--color-text-1);
    }
  }

  .arco-tag {
    padding: 16px 12px;
    font-size: 16px;
    margin: 6px;
  }

  .arco-tag-checked {
    background-color: #8695ff;
  }
</style>
