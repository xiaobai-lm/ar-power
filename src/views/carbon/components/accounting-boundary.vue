<script setup lang="ts">
  import { ref } from 'vue';

  const tab = ref(true);
  const columns = [
    { title: '核算边界', dataIndex: 'boundary' },
    { title: '年度', dataIndex: 'year' },
    { title: '状态', dataIndex: 'state' },
    { title: '创建时间', dataIndex: 'createTime' },
    { title: '更新时间', dataIndex: 'updateTime' },
    { title: '操作人', dataIndex: 'operator' },
    { title: '操作', slotName: 'do' },
  ];
  const data = [
    {
      boundary: 'V-2023-1.0',
      year: '2023',
      state: '继续填报',
      createTime: '2023-10-27',
      updateTime: '2023-10-27',
      operator: 'Tom',
    },
    {
      boundary: 'V-2022-1.0',
      year: '2022',
      state: '已完成',
      createTime: '2022-11-17',
      updateTime: '2023-10-27',
      operator: 'Allen',
    },
    {
      boundary: 'V-2021-1.0',
      year: '2021',
      state: '已完成',
      createTime: '2021-02-21',
      updateTime: '2023-10-27',
      operator: 'Faker',
    },
    {
      boundary: 'V-2021-1.0',
      year: '2021',
      state: '已过期',
      createTime: '2021-12-10',
      updateTime: '2023-10-27',
      operator: 'Remy',
    },
  ];
  // 碳排详情页的表头数据
  const columns1 = [
    { title: '核算单元', dataIndex: 'dan' },
    { title: '排放节点', dataIndex: 'dan1' },
    { title: '排放源', dataIndex: 'dan2' },
    {
      title: '排放因子',
      dataIndex: 'dan3',
      children: [
        { title: '数据来源', dataIndex: 'lai' },
        { title: '排放因子', dataIndex: 'pai' },
      ],
    },
    {
      title: '活动数据',
      dataIndex: 'dan4',
      children: [
        { title: '数据来源', dataIndex: 'lai1' },
        { title: '关联变量', dataIndex: 'pai2' },
      ],
    },
  ];
  // 合并表格行
  const spanMethod = ({ rowIndex, columnIndex }) => {
    if (rowIndex === 0 && columnIndex === 1) {
      return {
        rowspan: 2,
        colspan: 1,
      };
    }
    if (rowIndex === 0 && columnIndex === 0) {
      return {
        rowspan: 2,
        colspan: 1,
      };
    }
    if (rowIndex === 2 && columnIndex === 0) {
      return {
        rowspan: 2,
        colspan: 1,
      };
    }
    if (rowIndex === 2 && columnIndex === 1) {
      return {
        rowspan: 2,
        colspan: 1,
      };
    }

    return 0;
  };
  // 碳排核算详情页的模拟数据项
  const data1 = [
    {
      dan: '科技园',
      dan1: '总进线',
      dan2: '电力',
      lai: '缺省值',
      pai: '0.0006101',
      lai1: '关联变量',
      pai2: '26794.625',
    },
    {
      dan: '科技园',
      dan1: '总进线',
      dan2: '热力',
      lai: '缺省值',
      pai: '0.11',
      lai1: '关联变量',
      pai2: '41.079',
    },
    {
      dan: '产业园',
      dan1: '总进线',
      dan2: '电力',
      lai: '缺省值',
      pai: '0.0006101',
      lai1: '关联变量',
      pai2: '54862.05',
    },
    {
      dan: '产业园',
      dan1: '总进线',
      dan2: '热力',
      lai: '缺省值',
      pai: '0.11',
      lai1: '关联变量',
      pai2: '61.132',
    },
  ];
</script>

<template>
  <div class="boundary"
    ><div v-if="tab"
      ><div class="top-search"
        ><a-input-search placeholder="搜索版本"></a-input-search></div
      ><div class="content"
        ><div class="content-table"
          ><a-table
            :columns="columns"
            :bordered="{ wrapper: true, cell: true, headerCell: true }"
            :data="data"
          >
            <template #do>
              <a-button type="text" @click="tab = !tab">详情</a-button>
            </template>
          </a-table></div
        ></div
      ></div
    >
    <div v-else
      ><a-divider
        direction="vertical"
        style="
          border: #245daf solid 2px;
          height: 25px;
          margin-left: 0;
        " /><a-space
        ><span style="color: #ffffff; font-size: large">碳排核算</span
        ><a-button
          style="margin-left: 10px"
          type="secondary"
          size="small"
          @click="tab = !tab"
          >返回</a-button
        ></a-space
      ><div class="detail"
        ><a-form>
          <a-row>
            <a-col :span="8">
              <a-form-item label="年度:" label-col-flex="100px" required>
                <a-date-picker style="width: 350px"></a-date-picker>
              </a-form-item>
            </a-col> </a-row
          ><a-row>
            <a-col>
              <a-form-item label="核算边界:" label-col-flex="100px" required>
                <a-table
                  :columns="columns1"
                  :bordered="{ wrapper: true, cell: true, headerCell: true }"
                  :span-method="spanMethod"
                  :data="data1"
                  style="width: 99%"
                ></a-table>
              </a-form-item>
            </a-col>
          </a-row> </a-form></div
    ></div>
  </div>
</template>

<style scoped lang="less">
  .boundary {
    width: 97%;
    margin: 10px 20px;
    color: #c7c6c6;
    position: relative;
    .top-search {
      width: 15%;
      position: absolute;
      right: 0;
    }
    .content {
      background-color: #232323;
      position: relative;
      top: 40px;
      .content-table {
        width: 98%;
        margin-left: 1%;
        padding-top: 10px;
      }
    }
    .detail {
      width: 100%;
      background-color: #232323;
      padding-top: 10px;
      margin-top: 20px;
    }
  }
</style>
