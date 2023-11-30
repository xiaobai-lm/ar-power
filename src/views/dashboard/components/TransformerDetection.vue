<template>
  <div v-show="isShow ? true : false" class="container">
    <div class="container-header">
      <a-radio-group v-model="radioValue" @change="handleChange">
        <a-radio value="1">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable><icon-paste />平铺</a-tag>
          </template>
        </a-radio>
        <a-radio value="2">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable><icon-paste />表格</a-tag>
          </template>
        </a-radio>
      </a-radio-group>
      <div class="container-header-p1">
        <icon-calendar :style="{ color: '#3d648f' }" />
        变压器台数：{{ dataList.highPressure.length }}
      </div>
      <div class="container-header-p2">
        <icon-nav :style="{ color: '#9d416f' }" />
        总额日当容量：16800kVA
      </div>
      <div class="container-header-p3">轻载：2</div>
    </div>
    <div v-show="tile" class="container-container">
      <a-row :gutter="10">
        <a-col
          v-for="(firstItem, index) in dataList.highPressure"
          :key="index"
          :span="5"
          @click="handleClick(firstItem, index)"
        >
          <a-card
            v-for="(item, index) in firstItem"
            :key="index"
            :bordered="false"
            :title="item[0].cardName"
            hoverable
            style="border: 1px solid #faad14"
            class="container-container-outCard"
          >
            <template #extra>
              <a-link> 详情 </a-link>
            </template>
            <a-row>
              <a-col
                v-for="(list, index2) in item"
                :key="index2"
                :span="list.span"
              >
                <div class="container-container-outCard-title">
                  {{ list.title }}
                </div>
                <a-card class="container-container-lineCard" :bordered="false">
                  <div
                    v-for="(lists, index4) in list.children"
                    :key="index4"
                    class="container-container-lineCard-main"
                  >
                    {{ lists.name }}
                    <span style="float: right">{{ lists.value }}</span>
                    <a-divider v-show="lists.isShow" />
                  </div>
                </a-card>
              </a-col>
            </a-row>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <div v-show="tabColumns">
      <a-table :columns="column" :data="data" :bordered="{ cell: true }">
      </a-table>
    </div>
  </div>
  <div v-show="isShowTwo ? true : false" class="body">
    <TransformerMonitoring :is-show="isShow" :is-show-two="isShowTwo" />
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { useUserDataList } from '@/store';
  import TransformerMonitoring from './components/TransformerMonitoring.vue';

  const dataList = useUserDataList();
  const radioValue = ref('1');
  const isShow = ref(true);
  const isShowTwo = ref(false);
  const tile = ref(true);
  const tabColumns = ref(false);

  const handleChange = () => {
    if (radioValue.value === '1') {
      tile.value = true;
      tabColumns.value = false;
    } else {
      tile.value = false;
      tabColumns.value = true;
    }
  };

  const handleClick = (
    firstItem: { highPressureList: { cardName: string }[] },
    index: any
  ) => {
    console.log(index);
    isShow.value = false;
    isShowTwo.value = true;
    dataList.title = firstItem.highPressureList[0].cardName;
    console.log(dataList.title);
  };

  const column = [
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'name',
      dataIndex: 'name',
    },
  ];

  const data = reactive([
    {
      name: '1111',
    },
    {
      name: '2222',
    },
  ]);
</script>

<style lang="less" scoped>
  * {
    font-size: 12px;
  }

  .container {
    padding: 10px;

    &-header {
      display: flex;

      &-p1,
      &-p2 {
        margin-left: 20px;
        font-size: 18px;
        line-height: 32px;
        color: white;
      }

      &-p3 {
        color: white;
        position: absolute;
        line-height: 32px;
        right: 20px;
      }
    }

    &-container {
      padding: 20px;

      &-outCard {
        &-title {
          padding: 0 10px;
        }
      }

      &-lineCard {
        margin-bottom: 10px;

        &-main {
          background-color: #33404c;
          height: 30px;
          line-height: 30px;
          padding: 0 10px;
        }
      }
    }
  }

  // divider
  .arco-divider-horizontal {
    margin: 2px 0;
  }

  .arco-tag {
    padding: 16px 12px;
    font-size: 16px;
    margin: 6px;
  }

  .arco-tag-checked {
    background-color: #8695ff;
  }

  :deep(.arco-card-header) {
    background-color: #faad14 !important;
  }

  :deep(.arco-card-body) {
    padding: 5px !important;
  }
</style>
