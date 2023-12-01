<template>
  <div class="container">
    <a-card style="border: none; padding: 0; height: 85vh; overflow-y: scroll">
      <a-select v-model="selectValue" style="width: 48%" @change="handleChange">
        <a-option value="1">变压器</a-option>
        <a-option value="2">干式变压器</a-option>
        <a-option value="3">中央空调</a-option>
        <a-option value="4">断路器3P</a-option>
      </a-select>
      <a-tree-select
        :data="treeSelectData"
        style="width: 48%; margin-left: 4%"
      ></a-tree-select>
      <a-input-search style="margin-top: 10px"></a-input-search>
      <a-tree
        v-model="checkedKeys"
        :check-strictly="child"
        :checkable="true"
        :data="treeData"
        :show-line="true"
        @check="handleCheck"
      />
      <!-- <a-button @click="handleClick">传值</a-button> -->
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import { IconCalendar } from '@arco-design/web-vue/es/icon';
  import { h, ref } from 'vue';

  const checkedKeys = ref(false);
  const child = ref(false);
  const selectValue = ref('1');

  const handleCheck = (halfCheckedNodes: any, data: any) => {
    console.log(halfCheckedNodes);
  };

  const treeData = ref([
    {
      title: '高压电流',
      key: '0-0',
      children: [
        {
          title: 'A相电流',
          key: '0-0-2',
          children: [
            {
              title: 'B相电流',
              key: '0-0-2-1',
              name: '321',
            },
            {
              title: 'C相电流',
              key: '0-0-2-2',
              name: '123',
            },
          ],
        },
      ],
    },
    {
      title: '低压电流',
      key: '0-1',
      children: [
        {
          title: 'A相电流',
          key: '0-1-1',
          children: [
            {
              title: 'B相电流 ',
              key: '0-1-1-1',
            },
            {
              title: 'C相电流 ',
              key: '0-1-1-2',
            },
          ],
        },
        {
          title: '高压电',
          key: '0-1-2',
        },
      ],
    },
  ]);

  const treeSelectData = ref([
    {
      key: 'node1',
      icon: () => h(IconCalendar),
      title: 'Trunk',
      disabled: true,
      children: [
        {
          key: 'node2',
          title: 'Leaf',
        },
      ],
    },
    {
      key: 'node3',
      title: 'Trunk2',
      icon: () => h(IconCalendar),
      children: [
        {
          key: 'node4',
          title: 'Leaf',
        },
        {
          key: 'node5',
          title: 'Leaf',
        },
      ],
    },
  ]);

  const handleChange = () => {
    if (selectValue.value === '1') {
      treeData.value = [
        {
          title: 'Trunk 0-0',
          key: '0-0',
          children: [
            {
              title: 'Branch 0-0-2',
              key: '0-0-2',
              children: [
                {
                  title: 'Leaf',
                  key: '0-0-2-1',
                },
                {
                  title: 'Leaf',
                  key: '0-0-2-2',
                },
              ],
            },
          ],
        },
      ];
    } else if (selectValue.value === '2') {
      treeData.value = [
        {
          title: '高压设备',
          key: '0-0',
          children: [
            {
              title: '正向有度功',
              key: '0-0-2',
              children: [
                {
                  title: '频率',
                  key: '0-0-2-1',
                },
                {
                  title: '空调',
                  key: '0-0-2-2',
                },
              ],
            },
          ],
        },
        {
          title: 'Trunk 0-0',
          key: '0-0',
          children: [
            {
              title: 'Branch 0-0-2',
              key: '0-0-2',
              children: [
                {
                  title: 'Leaf',
                  key: '0-0-2-1',
                },
                {
                  title: 'Leaf',
                  key: '0-0-2-2',
                },
              ],
            },
          ],
        },
      ];
    }
  };
</script>

<style scoped></style>
