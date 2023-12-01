<template>
  <div class="container">
    <a-layout class="container-layout">
      <a-layout-sider class="container-layout-sider">
        <a-tree
          :data="treeData"
          :default-expanded-keys="['0-0-0']"
          :default-selected-keys="['0-0-0']"
          :show-line="true"
          @select="tabsHandleClick"
        />
      </a-layout-sider>
      <a-layout-content class="container-layout-content">
        <a-breadcrumb
          v-for="(tab, index) in treeData"
          :key="index"
          style="margin: 10px 0"
        >
          <a-breadcrumb-item>{{ tab.title }}</a-breadcrumb-item>
        </a-breadcrumb>
        <a-switch v-model="switchValue" />
        <a-tooltip content="This is a Tooltip" position="right">
          <icon-question-circle style="color: white" />
        </a-tooltip>
        <a-card style="margin-top: 20px">
          告警级别:
          <a-select
            default-value="Beijing"
            style="width: 320px; margin-left: 10px"
          >
            <a-option>Beijing</a-option>
          </a-select>
          告警类型：
          <a-select
            default-value="Beijing"
            style="width: 320px; margin-left: 10px"
          >
            <a-option>Beijing</a-option>
          </a-select>
          测点：
          <a-select
            default-value="Beijing"
            style="width: 320px; margin-left: 10px"
          >
            <a-option>Beijing</a-option>
          </a-select>

          <a-table
            :bordered="{ wrapper: true, cell: true }"
            :columns="columns"
            :data="data"
            style="margin-top: 20px"
          />
        </a-card>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';

  const switchValue = ref(false);
  const tabsHandleClick = (title: any, key: any) => {
    console.log(title, key);
  };
  const treeData = [
    {
      title: 'xxx广场',
      key: '0-0',
      children: [
        {
          title: 'Ⅱ',
          key: '0-0-0',
          children: [
            {
              title: '高压设备12',
              key: '0-0-0-0',
            },
            {
              title: '高压设备11',
              key: '0-0-0-1',
            },
          ],
        },
        {
          title: '高压',
          key: '0-0-1',
          children: [
            {
              title: '电气柜',
              key: '0-0-1-0',
            },
            {
              title: '电气柜2',
              key: '0-0-1-1',
            },
          ],
        },
      ],
    },
  ];

  const columns = [
    {
      title: '测点',
      dataIndex: 'Survey',
    },
    {
      title: '所属设备',
      dataIndex: 'Equipment',
    },
    {
      title: '告警类型',
      dataIndex: 'AlarmType',
    },
    {
      title: '告警级别',
      dataIndex: 'AlarmLevel',
    },
    {
      title: '触发',
      dataIndex: 'Touch',
    },
    {
      title: '告警开关',
      dataIndex: 'Switch',
    },
    {
      title: '关联摄像头',
      dataIndex: 'Camera',
    },
    {
      title: '关联机器人',
      dataIndex: 'Robot',
    },
  ];
  const data = reactive([
    {
      key: '1',
      Survey: 'Jane Doe',
      Equipment: 23000,
      AlarmType: '32 ondon',
      AlarmLevel: 'jane',
      Touch: 'janeom',
      Switch: 'jane@com',
      Camera: 'jan.com',
      Robot: 'DSADAS',
    },
  ]);
</script>

<style lang="less" scoped>
  .container {
    &-layout {
      &-sider {
        height: 88vh;
      }

      &-content {
        width: 100%;
        height: 85vh;
        margin-left: 10px;

        &-tab1 {
          padding: 10px;
        }
      }
    }
  }

  :deep(.arco-table .arco-table-element) {
    margin: 0;
  }

  .a-card {
    margin-top: 20px;
  }
</style>
