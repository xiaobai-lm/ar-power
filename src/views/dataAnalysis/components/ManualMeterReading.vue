<template>
  <div class="container">
    <a-row>
      <a-col :span="4">
        <a-card>
          <a-select placeholder="请选择设备类型" style="width: 45%">
            <a-option>A</a-option>
            <a-option>B</a-option>
            <a-option>C</a-option>
          </a-select>
          <a-select
            placeholder="请选择变量属性"
            style="width: 45%; margin-left: 5%"
          >
            <a-option>属性A</a-option>
            <a-option>属性B</a-option>
            <a-option>属性C</a-option>
          </a-select>
          <a-input-search
            placeholder="搜索变脸名称或者变量编码"
            style="width: 90%"
          ></a-input-search>
          <a-divider></a-divider>
          <a-tree
            v-model:checked-keys="checkedKeysTwo"
            :check-strictly="checkStrictly"
            :checkable="true"
            :data="treeData"
            checked-strategy="child"
            @check="handleCheck"
          ></a-tree>
        </a-card>
      </a-col>
      <a-col :span="20">
        <a-space>日期：</a-space>
        <a-date-picker style="width: 200px"></a-date-picker>
        <a-space>时间点</a-space>
        <a-select
          :default-value="['Beijing', 'Shanghai']"
          :max-tag-count="2"
          :scrollbar="scrollbar"
          :style="{ width: '280px' }"
          multiple
          placeholder="Please select ..."
        >
          <a-option>Beijing</a-option>
          <a-option>Shanghai</a-option>
          <a-option>Guangzhou</a-option>
          <a-option disabled>Disabled</a-option>
          <a-option>Shenzhen</a-option>
          <a-option>Wuhan</a-option>
        </a-select>
        <a-select placeholder="一键选择" style="width: 100px">
          <a-option>1</a-option>
          <a-option>2</a-option>
          <a-option>3</a-option>
        </a-select>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const checkStrictly = ref();
  const checkedKeysTwo = ref();
  const handleCheck = () => {
    console.log('aaa');
  };
  const scrollbar = ref();
  const treeData = [
    {
      title: 'Trunk 0-0',
      key: '0-0',
      children: [
        {
          title: 'Leaf 0-0-1',
          key: '0-0-1',
        },
        {
          title: 'Branch 0-0-2',
          key: '0-0-2',
          children: [
            {
              title: 'Leaf 0-0-2-1',
              key: '0-0-2-1',
            },
          ],
        },
      ],
    },
    {
      title: 'Trunk 0-1',
      key: '0-1',
      children: [
        {
          title: 'Leaf 0-1-1',
          key: '0-1-1',
        },
        {
          title: 'Leaf 0-1-2',
          key: '0-1-2',
        },
      ],
    },
  ];
</script>

<style scoped></style>
